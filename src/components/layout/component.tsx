import { Footer } from "../footer/component";
import { Header } from "../header/component";
import classes from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header className={classes.layout__header} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
