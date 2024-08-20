import Main from "./components/Main/Main.jsx";
import { ThemeContext } from "./contexts/ThemeContext.jsx";
import { useContext, useEffect } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light",
    );
  }, [theme]);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
