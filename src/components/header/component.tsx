import classes from "./styles.module.scss";
import classnames from "classnames";

interface Props {
  className: string;
  onChangeTheme: () => void;
}

export const Header: React.FC<Props> = ({ className, onChangeTheme }) => {
  return (
    <header className={classnames(classes.header, className)}>
      <button className={classes.header__button}>Order</button>
      <button className={classes.header__button} onClick={onChangeTheme}>
        Change theme
      </button>
    </header>
  );
};
