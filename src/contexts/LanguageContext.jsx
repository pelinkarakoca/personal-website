/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { en } from "../../public/languages/en";
import { tr } from "../../public/languages/tr";

export const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const browserLanguage = navigator.language === "en-US" ? en : tr;
  const [language, setLanguage] = useState(browserLanguage);

  function setLocalStorage(lang) {
    localStorage.setItem("website_language", JSON.stringify(lang));
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider value={{ language, setLocalStorage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/*     const browserTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches; // true(dark), false(light)
  const browserLanguage = navigator.language === "en-US" ? en : tr;
*/
