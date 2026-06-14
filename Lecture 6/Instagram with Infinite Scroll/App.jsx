import { useContext } from "react";
import Feed from "./components/Feed";
import Stories from "./components/Stories";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/App.css";

function App() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div
      className={
        darkMode ? "app dark" : "app"
      }
    >
      <header>
        <h1>Instagram Clone</h1>

        <button
          onClick={toggleTheme}
        >
          {darkMode
            ? "☀️ Light"
            : "🌙 Dark"}
        </button>
      </header>

      <Stories />

      <Feed />
    </div>
  );
}

export default App;
