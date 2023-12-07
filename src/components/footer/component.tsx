import { Button } from "../button/component";
import classes from "./styles.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Button className={classes.footer__button}>Contacts</Button>
    </footer>
  );
};
