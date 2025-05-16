import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WinnerProvider } from "./Context/WinnerContext.tsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WinnerProvider>
        <App />
      </WinnerProvider>
    </BrowserRouter>
  </StrictMode>
);
