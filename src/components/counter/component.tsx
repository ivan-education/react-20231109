import classes from "./styles.module.css";

const MIN = 0;
const MAX = 5;

interface Props {
  count: number;
  onUpdateCount: (n: number) => void;
  step?: number;
  min?: number;
  max?: number;
}

export const Counter: React.FC<Props> = ({
  count = MIN,
  onUpdateCount,
  step = 1,
  min = MIN,
  max = MAX,
}) => {
  return (
    <span className="counter">
      <button
        className={classes.counter__button}
        onClick={(e) => {
          e.preventDefault();
          const updated = min < count ? count - step : min;
          onUpdateCount(updated);
        }}
        disabled={count <= min}
      >
        -
      </button>
      &nbsp;{count}&nbsp;
      <button
        className={classes.counter__button}
        onClick={(e) => {
          e.preventDefault();
          const updated = count < max ? count + step : max;
          onUpdateCount(updated);
        }}
        disabled={count >= max}
      >
        +
      </button>
    </span>
  );
};
