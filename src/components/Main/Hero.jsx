import { LanguageContext } from "../../contexts/LanguageContext";
import Button from "./Button";
import { useContext } from "react";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex-col items-center space-y-6 py-20">
      <h1 className="text-5xl font-bold tracking-wide text-customGreen">
        {language.heading1}
      </h1>
      <h5 className="text-xl text-customWhite">{language.subheading}</h5>
      <div className="flex space-x-10 px-10">
        <Button icon="fa-brands fa-linkedin-in">GitHub</Button>
        <Button>Linkedin</Button>
      </div>
    </div>
  );
}
