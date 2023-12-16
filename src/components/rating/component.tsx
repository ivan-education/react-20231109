import { StarType } from "src/types";
import { StarIcon } from "./star";

const DEFAULT_MAX_RATING = 5;

interface Props {
  rating: number;
  max?: number;
}

export const Rating: React.FC<Props> = ({
  rating,
  max = DEFAULT_MAX_RATING,
}) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    let star;
    if (i <= rating) {
      star = <StarIcon key={i} type={StarType.ACTIVE} />;
    } else {
      if (i < rating + 1) {
        star = <StarIcon key={i} type={StarType.INACTIVE} />;
      } else {
        star = <StarIcon key={i} type={StarType.HALF} />;
      }
    }
    stars.push(star);
  }

  return <div>{stars}</div>;
};
