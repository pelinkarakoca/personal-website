import ToggleButton from "./ToggleButton";
import LanguageSelector from "./LanguageSelector";
export default function Navigator() {
  return (
    <div className=" pt-3 flex justify-between float-right border-2 border-sky-200">
      <LanguageSelector />
      <ToggleButton />
    </div>
  );
}
