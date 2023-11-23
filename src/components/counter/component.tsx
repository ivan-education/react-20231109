import classes from "./styles.module.css";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

interface Props {
  count: number;
  onUpdateCount: (n: number) => void;
  minCount?: number;
  maxCount?: number;
}

export const Counter: React.FC<Props> = ({
  count = MIN_COUNT,
  onUpdateCount,
  minCount = MIN_COUNT,
  maxCount = MAX_COUNT,
}) => {
  return (
    <span className="counter">
      <button
        className={classes.counter__button}
        onClick={() => {
          const updated = minCount < count ? count - 1 : minCount;
          onUpdateCount(updated);
        }}
      >
        -
      </button>
      &nbsp;{count}&nbsp;
      <button
        className={classes.counter__button}
        onClick={() => {
          const updated = count < maxCount ? count + 1 : maxCount;
          onUpdateCount(updated);
        }}
      >
        +
      </button>
    </span>
  );
};
