import { useContext, useEffect } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { en } from "../../../../public/languages/en";
import { tr } from "../../../../public/languages/tr";

export default function LanguageSelectorButton() {
  const { language, setLanguage } = useContext(LanguageContext);
  const browserLanguage = navigator.language === "en-US" ? en : tr;
  const [defaultValue, setLocalStorage] = useLocalStorage(
    "website_language",
    browserLanguage,
  );

  useEffect(() => {
    setLanguage(defaultValue);
  }, []);

  //TODO PARAGRAFIN CLASSINA CURSOR: POINTER EKLE

  return (
    <div
      className="pr-[1.5em]"
      onClick={() => {
        const selectedLanguage = language === en ? tr : en;
        setLocalStorage(selectedLanguage);
        setLanguage(selectedLanguage);
      }}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-customWhite">
        {language.switch}
      </p>
    </div>
  );
}
/* TÜRKÇE’YE GEÇ */
