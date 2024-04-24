import { useEffect, useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import "./styles.css";
import { FaMoon, FaSun } from "react-icons/fa";

const ContextAPI = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkTheme]);

  const themeStyles = getThemeStyles(darkTheme);

  return (
    <div style={themeStyles} className="contextApi-container">
      <span className="icon">
        {darkTheme ?  <FaSun /> : <FaMoon />}
      </span>
      <button style={themeStyles} className="btn-theme" onClick={toggleTheme}>
        {darkTheme ? <h1>Enable Light Theme</h1> : <h1>Enable Dark Theme</h1>}
      </button>
    </div>
  );
};

const getThemeStyles = (theme: boolean) => ({
  backgroundColor: !theme ? "var(--color-primary-variant)" : "#fff",
  color: !theme ? "#fff" : "var(--color-primary-variant)",
  border: !theme ? "1px solid #fff" : "1px solid var(--color-primary-variant)",
});

export default ContextAPI;