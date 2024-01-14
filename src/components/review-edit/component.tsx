import { RATING_MIN, RATING_STEP } from "src/constants/constants";
import classes from "./styles.module.scss";
import { Button } from "../button/component";
import { Counter } from "../counter/component";
import { useReducer } from "react";

interface Props {
  text: string;
  rating: number;
  onSave: (a: string, b: number) => void;
}

enum ACTIONS {
  UPDATE_TEXT = "updateText",
  UPDATE_RATING = "updateRating",
}

type FormState = {
  newText: string;
  newRating: number;
};

type FormAction =
  | { type: ACTIONS.UPDATE_TEXT; payload: string }
  | { type: ACTIONS.UPDATE_RATING; payload: number };

function reducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case ACTIONS.UPDATE_TEXT: {
      return {
        newText: action.payload,
        newRating: state.newRating,
      };
    }
    case ACTIONS.UPDATE_RATING: {
      return {
        newText: state.newText,
        newRating: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const ReviewEdit: React.FC<Props> = ({ text, rating, onSave }) => {
  const [reviewEditForm, dispatch] = useReducer(reducer, {
    newText: text,
    newRating: rating,
  });

  return (
    <div>
      <div>
        <textarea
          autoFocus
          className={classes.reviewEdit__input}
          value={reviewEditForm.newText}
          onChange={(e) => {
            dispatch({ type: ACTIONS.UPDATE_TEXT, payload: e.target.value });
          }}
        />
      </div>
      <div className={classes.reviewEdit__btnContainer}>
        <div className={classes.reviewEdit__form}>
          <label className={classes.reviewEdit__ratingLabel}>Rating:</label>
          <Counter
            count={reviewEditForm.newRating}
            onUpdateCount={(count) => {
              dispatch({ type: ACTIONS.UPDATE_RATING, payload: count });
            }}
            step={RATING_STEP}
            min={RATING_MIN}
          />
        </div>
        <Button
          className={classes.reviewEdit__saveBtn}
          onClick={() => {
            onSave(reviewEditForm.newText, reviewEditForm.newRating);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
