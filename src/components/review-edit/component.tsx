import { RATING_MIN, RATING_STEP } from "src/constants/constants";
import classes from "./styles.module.scss";
import { Button } from "../button/component";
import { Counter } from "../counter/component";
import { useRef, useState } from "react";

interface Props {
  text: string;
  rating: number;
  onSave: (a: string, b: number) => void;
}
export const ReviewEdit: React.FC<Props> = ({ text, rating, onSave }) => {
  const [newText, setNewText] = useState(text);
  const [newRating, setNewRating] = useState(rating);

  const ref = useRef<HTMLInputElement>(null);

  setTimeout(() => {
    if (ref.current != null) {
      ref.current.focus();
    }
  });

  return (
    <div>
      <div>
        <input
          className={classes.reviewEdit__input}
          ref={ref}
          type="text"
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
      </div>
      <div className={classes.reviewEdit__btnContainer}>
        <div className={classes.reviewEdit__form}>
          <label className={classes.reviewEdit__ratingLabel}>Rating:</label>
          <Counter
            count={newRating}
            onUpdateCount={(count) => setNewRating(count)}
            step={RATING_STEP}
            min={RATING_MIN}
          />
        </div>
        <Button
          className={classes.reviewEdit__saveBtn}
          onClick={() => {
            onSave(newText, newRating);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
