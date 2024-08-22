import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const browserTheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [defaultValue, setLocalStorage] = useLocalStorage(
    "website_theme_isDark",
    browserTheme,
  );

  useEffect(() => {
    setTheme(defaultValue);
  }, []);

  return (
    <div className="flex pr-[4em]">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          checked={theme}
          onChange={(e) => {
            setTheme(e.target.checked);
            setLocalStorage(e.target.checked);
          }}
        />
        <div className="peer h-5 w-9 rounded-full bg-customToggleButton transition-all duration-500 ease-in-out after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-0 peer-focus:ring-transparent"></div>{" "}
        <div className="pl-[0.5em] text-xs font-bold uppercase tracking-widest text-customSwitch">
          Dark mode
        </div>
      </label>
    </div>
  );
}
