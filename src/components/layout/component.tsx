import { Footer } from "../footer/component";
import { Header } from "../header/component";
import classes from "./styles.module.scss";
import { ThemeProvider } from "../theme-context/component";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <ThemeProvider>
        <Header className={classes.layout__header} />
        <main className={classes.layout__main}>{children}</main>
      </ThemeProvider>
      <Footer />
    </div>
  );
};
