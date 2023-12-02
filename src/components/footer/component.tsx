import classes from "./styles.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <button className={classes.footer__button}>Contacts</button>
    </footer>
  );
};
