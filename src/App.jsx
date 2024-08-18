import Header from "./components/Header/Header.jsx";
import { LanguageContextProvider } from "./contexts/LanguageContext.jsx";

function App() {
  console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  return (
    <LanguageContextProvider>
      <Header />
    </LanguageContextProvider>
  );
}

export default App;
