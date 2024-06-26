import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({
  darkTheme: true,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ darkTheme, toggleTheme }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;

