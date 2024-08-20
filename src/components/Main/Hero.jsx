import { LanguageContext } from "../../contexts/LanguageContext";
import Button from "./Button";
import { useContext } from "react";
export default function Hero() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h1 className="text-customGreen text-5xl font-bold tracking-wide">
        {language.heading1}
      </h1>
      <h5 className="text-customWhite text-xl	tracking-wide">
        {language.subheading}
      </h5>
      <div>
        <Button text="Github" />
        <Button text="Linkedin" />
      </div>
    </>
  );
}
