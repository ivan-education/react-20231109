import { useReducer } from "react";
import { ReviewEntity } from "src/types";
import { Counter } from "../counter/component";

const DEFAULT_FORM_STATE: ReviewEntity = {
  id: "0",
  user: "",
  text: "",
  rating: 5,
};

type ACTIONTYPE =
  | { type: "setUser"; payload: string }
  | { type: "setText"; payload: string }
  | { type: "setRating"; payload: number };

function reducer(state: ReviewEntity, action: ACTIONTYPE) {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.payload,
        text: DEFAULT_FORM_STATE.text,
        rating: DEFAULT_FORM_STATE.rating,
      };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
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
              dispatch({ type: "setUser", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <textarea
            id="text"
            value={reviewForm.text}
            onChange={(e) =>
              dispatch({ type: "setText", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Rating: </label>
          <Counter
            count={reviewForm.rating}
            onUpdateCount={(count) => {
              dispatch({ type: "setRating", payload: count });
            }}
            step={0.5}
            min={1}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
