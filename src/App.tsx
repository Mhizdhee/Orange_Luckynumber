import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TermsAndConditions from "./Components/TermsAndConditions";
import LandingPage from "./Pages/LandingPage";
import WinningsAndPayments from "./Components/WinningsAndPayments";
import WinningNumbersPage from "./Pages/WinningNumbersPage";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/winning-numbers" element={<WinningNumbersPage />} />
        <Route path="/Règlement-du-jeu" element={<TermsAndConditions />} />
        <Route path="/Gains-et-paiements" element={<WinningsAndPayments />} />
      </Routes>
    </>
  );
};

export default App;
