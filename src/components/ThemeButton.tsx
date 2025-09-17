import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { DarkThemeContext } from "../App";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(DarkThemeContext);

  return (
    <button
      onClick={() => setTheme((prev) => !prev)}
      className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded"
    >
      {theme ? <FiSun /> : <FiMoon />}
    </button>
  );
}
