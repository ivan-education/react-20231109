import { useState } from "react";
import classes from "./styles.module.css";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <span className="counter">
      <button
        className={classes.counter__button}
        onClick={() =>
          setCount((c) => {
            return c > 0 ? c - 1 : 0;
          })
        }
      >
        -
      </button>
      &nbsp;{count}&nbsp;
      <button
        className={classes.counter__button}
        onClick={() =>
          setCount((c) => {
            return c < 5 ? c + 1 : 5;
          })
        }
      >
        +
      </button>
    </span>
  );
};
