import { createContext } from "react";
import { Theme } from "src/types";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
