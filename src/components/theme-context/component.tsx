import { useCallback, useState } from "react";
import { Theme } from "src/types";
import { ThemeContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const changeTheme = useCallback((current: Theme) => {
    setTheme(current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
