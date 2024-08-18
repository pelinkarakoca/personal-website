import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import useLanguage from "../../../hooks/useLanguage";
import { en } from "../../../../public/languages/en";
import { tr } from "../../../../public/languages/tr";

export default function LanguageSelector() {
  //const [, setLanguageStorage] = useLanguage("website_language");
  //const { language } = useContext(LanguageContext);
  const { language, setLocalStorage } = useContext(LanguageContext);

  return (
    <div
      onClick={() => {
        //setLanguageStorage(language === en ? tr : en);
        setLocalStorage(language === en ? tr : en);
      }}
    >
      <p className="uppercase text-xs text-white font-bold tracking-widest">
        {language.switch}
      </p>
    </div>
  );
}
