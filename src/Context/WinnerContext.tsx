import React, { createContext, useContext } from "react";
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
  error: any;
}

const WinnerContext = createContext<WinnerContextType | undefined>(undefined);

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const WinnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading } = useSWR<ApiResponse>(
    "https://api.ydplatform.com/LN/fetch_winners.ashx",
    // "/api/LN/fetch_winners.ashx",
    // "/api/LN/fetch_winners",
    // `${baseUrl}/LN/fetch_winners.ashx`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <WinnerContext.Provider value={{ data, isLoading, error }}>
      {children}
    </WinnerContext.Provider>
  );
};

export const useWinner = (): WinnerContextType => {
  const context = useContext(WinnerContext);
  if (context === undefined) {
    throw new Error("useWinner must be used within a WinnerProvider");
  }
  return context;
};
