import { useState } from "react";
import classes from "./styles.module.css";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

interface Props {
  minCount?: number;
  maxCount?: number;
  onUpdateCount?: (n: number) => void;
}

export const Counter: React.FC<Props> = ({
  minCount = MIN_COUNT,
  maxCount = MAX_COUNT,
  onUpdateCount,
}) => {
  const [count, setCount] = useState(minCount);
  return (
    <span className="counter">
      <button
        className={classes.counter__button}
        onClick={() => {
          const updated = minCount < count ? count - 1 : minCount;
          setCount(updated);
          onUpdateCount?.(updated);
        }}
      >
        -
      </button>
      &nbsp;{count}&nbsp;
      <button
        className={classes.counter__button}
        onClick={() => {
          const updated = count < maxCount ? count + 1 : maxCount;
          setCount(updated);
          onUpdateCount?.(updated);
        }}
      >
        +
      </button>
    </span>
  );
};
