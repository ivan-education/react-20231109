import { createContext, useState } from "react";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import classes from "./styles.module.scss";
import { Theme } from "src/types";

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Theme>(Theme.LIGHT);

export const Layout: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  return (
    <div className={classes.layout}>
      <Header
        className={classes.layout__header}
        onChangeTheme={() =>
          setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        }
      />
      <ThemeContext.Provider value={theme}>
        <main>{children}</main>
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
};
