import { Button } from "../button/component";
import { ThemeProvider } from "../theme-context/component";
import { useTheme } from "../theme-context/hooks";
import classes from "./styles.module.scss";
import classnames from "classnames";

interface Props {
  className: string;
  onChangeTheme: () => void;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { theme, changeTheme } = useTheme();

  return (
    <ThemeProvider>
      <header className={classnames(classes.header, className)}>
        <Button className={classes.header__button}>Order</Button>
        <Button
          className={classes.header__button}
          onClick={() => changeTheme(theme)}
        >
          Change theme
        </Button>
      </header>
    </ThemeProvider>
  );
};
