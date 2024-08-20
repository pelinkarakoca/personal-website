import ToggleButton from "./ToggleButton";
import LanguageSelectorButton from "./LanguageSelectorButton";
export default function NavigatorContainer() {
  return (
    <div className="pt-[1em] pr-[10em] flex justify-between float-right border-2 border-sky-200">
      <LanguageSelectorButton />
      <ToggleButton />
    </div>
  );
}
