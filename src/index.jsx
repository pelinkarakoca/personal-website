import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageContextProvider } from "./contexts/LanguageContext.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LanguageContextProvider>
  </StrictMode>,
);
