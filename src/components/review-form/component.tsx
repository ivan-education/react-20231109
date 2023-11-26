import { useReducer } from "react";
import { ReviewEntity } from "src/types";
import { Counter } from "../counter/component";

const RATING_MIN = 1;
const RATING_MAX = 5;
const RATING_STEP = 0.5;

enum ACTIONS {
  SET_USER = "setUser",
  SET_TEXT = "setText",
  SET_RATING = "setRating",
}

const DEFAULT_FORM_STATE: ReviewEntity = {
  id: "0",
  user: "",
  text: "",
  rating: RATING_MAX,
};

type ACTIONTYPE =
  | { type: ACTIONS.SET_USER; payload: string }
  | { type: ACTIONS.SET_TEXT; payload: string }
  | { type: ACTIONS.SET_RATING; payload: number };

function reducer(state: ReviewEntity, action: ACTIONTYPE) {
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

export const ReviewForm: React.FC = () => {
  const [reviewForm, dispatch] = useReducer(reducer, DEFAULT_FORM_STATE);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Form Values: ", {
      ...reviewForm,
      id: crypto.randomUUID(),
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Name: </label>
          <input
            id="username"
            type="text"
            value={reviewForm.user}
            onChange={(e) =>
              dispatch({ type: ACTIONS.SET_USER, payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <textarea
            id="text"
            value={reviewForm.text}
            onChange={(e) =>
              dispatch({ type: ACTIONS.SET_TEXT, payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Rating: </label>
          <Counter
            count={reviewForm.rating}
            onUpdateCount={(count) => {
              dispatch({ type: ACTIONS.SET_RATING, payload: count });
            }}
            step={RATING_STEP}
            min={RATING_MIN}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
