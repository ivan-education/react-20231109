import { Button } from "../button/component";
import classes from "./styles.module.scss";
import classnames from "classnames";

interface Props {
  className: string;
  onChangeTheme: () => void;
}

export const Header: React.FC<Props> = ({ className, onChangeTheme }) => {
  return (
    <header className={classnames(classes.header, className)}>
      <Button className={classes.header__button}>Order</Button>
      <Button className={classes.header__button} onClick={onChangeTheme}>
        Change theme
      </Button>
    </header>
  );
};
