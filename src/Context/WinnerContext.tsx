import React, { createContext } from "react";
import useSWR from "swr";
import axios from "axios";

interface Prize {
  id: number;
  prizeName: string;
  numberOfDigits: number;
  prizeAmount: number;
  serviceId: number;
  serviceName: string;
  prizeNumber: number;
}

interface Subscriber {
  subscriberId: number;
  msisdn: string;
  fullMsisdn: string | null;
  serviceId: number;
  subscriptionDate: string;
  deactivationDate: string | null;
  isActive: boolean;
  subscriptionChannel: string | null;
}

interface Winner {
  id: number;
  winningDate: string;
  winningNumber: string;
  selectedMSISDN: string | null;
  prize: Prize;
  subscriber: Subscriber;
  paidDate: string | null;
  paidStatus: string;
}

interface WinnersByDate {
  date: string;
  winners: Winner[];
  totalWinners: number;
  totalPrizeAmount: number;
}

interface ApiResponse {
  success: boolean;
  data: {
    totalWinners: number;
    totalDates: number;
    totalPrizeAmount: number;
    winnersByDate: WinnersByDate[];
    earliestDate: string;
    latestDate: string;
  };
  message: string;
  timestamp: string;
}

interface DrawResult {
  serviceName: string;
  winningNumber: string;
  numWinners: number;
  totalPrize: string;
}

interface TransformedApiResponse {
  results: {
    drawDate: string;
    drawResults: DrawResult[];
  }[];
}

interface WinnerContextType {
  data: TransformedApiResponse | undefined;
  rawData: ApiResponse[] | undefined;
  isLoading: boolean;
  error: string | Error | null;
}

export const WinnerContext = createContext<WinnerContextType | undefined>(
  undefined
);

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const WinnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
  };

  const drawDate = getYesterdayDate();
  const serviceNames = [2];
  const lastXDraws = "0";
  const includeFullData = "false";

  // const apiUrls = serviceIds.map(
  //   (serviceId) =>
  //     `https://api.ydplatform.com:5542/winners/fetch?drawDate=${drawDate}&serviceId=${serviceId}&lastXDraws=${lastXDraws}`
  //   // `/LN/winners/fetch?drawDate=${drawDate}&serviceId=${serviceId}&lastXDraws=${lastXDraws}`
  // );
  const apiUrls = serviceNames.map(
    (serviceName) =>
      `https://84.200.73.130:5542/api/v1/Winners/fetch?drawDate=${drawDate}&serviceName=${serviceName}&lastXDraws=${lastXDraws}&includeFullData=${includeFullData}`
    // `/api/v1/Winners/fetch?drawDate=${drawDate}&serviceName=${serviceName}&lastXDraws=${lastXDraws}&includeFullData=${includeFullData}`
  );

  const {
    data: rawData,
    error,
    isLoading,
  } = useSWR(apiUrls, (urls) => Promise.all(urls.map((url) => fetcher(url))), {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateIfStale: true,
  });

  const transformedData = React.useMemo(() => {
    if (!rawData) return undefined;

    const allDrawResults: DrawResult[] = [];

    rawData.forEach((apiResponse: ApiResponse) => {
      if (!apiResponse?.data?.winnersByDate?.length) return;

      apiResponse.data.winnersByDate.forEach((dateData: WinnersByDate) => {
        const serviceMap = new Map();

        dateData.winners.forEach((winner: Winner) => {
          const serviceName = winner.prize.serviceName;
          const winningNumber = winner.winningNumber;
          const key = `${serviceName}-${winningNumber}`;

          if (!serviceMap.has(key)) {
            serviceMap.set(key, {
              serviceName,
              winningNumber,
              count: 0,
              totalPrize: 0,
            });
          }

          const group = serviceMap.get(key);
          group.count += 1;
          group.totalPrize += winner.prize.prizeAmount;
        });

        const drawResultsForDate = Array.from(serviceMap.values()).map(
          (group) => ({
            serviceName: group.serviceName,
            winningNumber: group.winningNumber,
            numWinners: group.count,
            totalPrize: group.totalPrize.toString(),
          })
        );

        allDrawResults.push(...drawResultsForDate);
      });
    });

    return {
      results: [
        {
          drawDate: drawDate,
          drawResults: allDrawResults,
        },
      ],
    };
  }, [rawData, drawDate]);

  return (
    <WinnerContext.Provider
      value={{
        data: transformedData,
        rawData: rawData as ApiResponse[] | undefined,
        isLoading,
        error,
      }}
    >
      {children}
    </WinnerContext.Provider>
  );
};
