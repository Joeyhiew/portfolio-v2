import React, { ReactNode, createContext, useContext, useState } from "react";
import { THEME } from "../../constants";

export type ThemeContextType = {
  theme: THEME;
  toggleTheme: React.Dispatch<React.SetStateAction<THEME>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: THEME.LIGHT,
  toggleTheme: () => {},
});

const ThemeProvider = ({
  children,
  initalTheme,
}: {
  children: ReactNode;
  initalTheme: THEME;
}) => {
  const [theme, setTheme] = useState(initalTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
