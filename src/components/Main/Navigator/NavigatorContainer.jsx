import ToggleButton from "./ToggleButton";
import LanguageSelectorButton from "./LanguageSelectorButton";
export default function NavigatorContainer() {
  return (
    <div className="float-right flex justify-between border-2 pr-[10em] pt-[1em]">
      <LanguageSelectorButton />
      <ToggleButton />
    </div>
  );
}
