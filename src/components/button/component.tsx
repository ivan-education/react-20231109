import { useContext } from "react";
import { ThemeContext } from "../layout/component";
import classNames from "classnames";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}
export const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  const theme = useContext(ThemeContext);

  props.className = classNames(props.className, theme);

  return <button {...props}>{children}</button>;
};
