import React, { createContext } from "react";
import useSWR from "swr";
import axios from "axios";

interface DrawResult {
  serviceName: string;
  winningNumber: string;
  numWinners: number;
  totalPrize: string;
}

interface ApiResponse {
  results: {
    drawDate: string;
    drawResults: DrawResult[];
  }[];
}

interface WinnerContextType {
  data: ApiResponse | undefined;
  isLoading: boolean;
  error: string | Error | null;
}

const serviceIds = ["1186", "1189", "1185", "1188", "1184", "1187"];

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
  const lastXDraws = "0";

  const apiUrls = serviceIds.map(
    (serviceId) =>
      `https://api.ydplatform.com:5542/winners/fetch?drawDate=${drawDate}&serviceId=${serviceId}&lastXDraws=${lastXDraws}`
    // `/LN/winners/fetch?drawDate=${drawDate}&serviceId=${serviceId}&lastXDraws=${lastXDraws}`
  );

  const { data, error, isLoading } = useSWR(
    apiUrls,
    (urls) => Promise.all(urls.map((url) => fetcher(url))),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateIfStale: true,
    }
  );

  const transformedData = data
    ? {
        results: [
          {
            drawDate: drawDate,
            drawResults: data.flatMap((serviceData: any) => {
              if (
                !serviceData.winners ||
                Object.keys(serviceData.winners).length === 0
              ) {
                return [];
              }

              const dateWinners = serviceData.winners[drawDate];
              if (!dateWinners) return [];

              return dateWinners.map((winner: any) => ({
                serviceName: winner.serviceName,
                winningNumber: winner.winningNumber,
                numWinners: winner.numberOfWinners,
                totalPrize: winner.totalPrize,
              }));
            }),
          },
        ],
      }
    : undefined;

  return (
    <WinnerContext.Provider value={{ data: transformedData, isLoading, error }}>
      {children}
    </WinnerContext.Provider>
  );
};

// export const useWinner = (): WinnerContextType => {
//   const context = useContext(WinnerContext);
//   if (context === undefined) {
//     throw new Error("useWinner must be used within a WinnerProvider");
//   }
//   return context;
// };
