import classNames from "classnames";
import { useTheme } from "../theme-context/hooks";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}
export const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  const { theme } = useTheme();

  props.className = classNames(props.className, theme);

  return <button {...props}>{children}</button>;
};
