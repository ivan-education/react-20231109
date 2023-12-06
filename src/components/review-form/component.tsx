import { useEffect, useReducer } from "react";
import { Counter } from "../counter/component";
import classes from "./styles.module.scss";
import { Button } from "../button/component";
import { UserEntity } from "src/types";

const RATING_MIN = 1;
const RATING_MAX = 5;
const RATING_STEP = 0.5;

enum ACTIONS {
  SET_USER = "setUser",
  SET_TEXT = "setText",
  SET_RATING = "setRating",
}

interface ReviewForm {
  id: string;
  user: UserEntity;
  text: string;
  rating: number;
}

const DEFAULT_USER = { id: "default_id", name: "" };

const DEFAULT_FORM_STATE: ReviewForm = {
  id: "",
  user: DEFAULT_USER,
  text: "",
  rating: RATING_MAX,
};

type ActionType =
  | { type: ACTIONS.SET_USER; payload: UserEntity }
  | { type: ACTIONS.SET_TEXT; payload: string }
  | { type: ACTIONS.SET_RATING; payload: number };

function reducer(state: ReviewForm, action: ActionType) {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        text: DEFAULT_FORM_STATE.text,
        rating: DEFAULT_FORM_STATE.rating,
      };
    case ACTIONS.SET_TEXT:
      return { ...state, text: action.payload };
    case ACTIONS.SET_RATING:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
}

interface Props {
  restaurantId: string;
}

const generateId = () => crypto.randomUUID();

export const ReviewForm: React.FC<Props> = ({ restaurantId }) => {
  const [reviewForm, dispatch] = useReducer(reducer, DEFAULT_FORM_STATE);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Form Values: ", {
      ...reviewForm,
      id: generateId(),
    });
  };

  const clearForm = () => {
    dispatch({ type: ACTIONS.SET_USER, payload: DEFAULT_USER });
  };

  useEffect(() => clearForm(), [restaurantId]);

  return (
    <div>
      <h4>Leave your review:</h4>
      <form onSubmit={onSubmit}>
        <div className={classes.form__row}>
          <label htmlFor="username" className={classes.form__label}>
            Name:{" "}
          </label>
          <input
            id="username"
            type="text"
            value={reviewForm.user.name}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_USER,
                payload: { id: DEFAULT_USER.id, name: e.target.value },
              })
            }
            className={classes.form__field}
          />
        </div>
        <div className={classes.form__row}>
          <label htmlFor="text" className={classes.form__label}>
            Text:{" "}
          </label>
          <textarea
            id="text"
            value={reviewForm.text}
            onChange={(e) =>
              dispatch({ type: ACTIONS.SET_TEXT, payload: e.target.value })
            }
            className={classes.form__field}
          />
        </div>
        <div className={classes.form__row}>
          <label className={classes.form__label}>Rating: </label>
          <Counter
            count={reviewForm.rating}
            onUpdateCount={(count) => {
              dispatch({ type: ACTIONS.SET_RATING, payload: count });
            }}
            step={RATING_STEP}
            min={RATING_MIN}
          />
        </div>
        <div className={classes.form__row}>
          <label className={classes.form__label}></label>
          <Button type="submit" value="Submit" className={classes.form__submit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
