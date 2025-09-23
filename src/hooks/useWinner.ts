import { useContext } from "react";
import { WinnerContext } from "../Context/WinnerContext";

export const useWinner = () => {
  const context = useContext(WinnerContext);
  if (context === undefined) {
    throw new Error("useWinner must be used within a WinnerProvider");
  }
  return context;
};
