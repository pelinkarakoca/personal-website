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
    <div className="">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme}
          onChange={(e) => {
            setTheme(e.target.checked);
            setLocalStorage(e.target.checked);
          }}
        />
        <div className="w-9 h-5 bg-customToggleButton peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all "></div>{" "}
        <div className="uppercase text-xs text-customSwitch font-bold tracking-widest">
          Dark mode
        </div>
      </label>
    </div>
  );
}
