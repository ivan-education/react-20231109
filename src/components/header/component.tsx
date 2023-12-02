import classes from "./styles.module.scss";
import classnames from "classnames";

interface Props {
  className: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={classnames(classes.header, className)}>
      <button className={classes.header__button}>Order</button>
      <button className={classes.header__button}>Change theme</button>
    </header>
  );
};
