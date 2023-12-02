import styles from "./styles.module.scss";
import classnames from "classnames";

interface Props {
  className: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={classnames(styles.header, className)}>
      <button>Order</button> <button>Change theme</button>
    </header>
  );
};
