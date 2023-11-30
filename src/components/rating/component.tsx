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
  const roundedRating = Math.ceil(rating);
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const star =
      i <= roundedRating ? (
        <StarIcon isActive={true} key={i} />
      ) : (
        <StarIcon key={i} />
      );
    stars.push(star);
  }

  return <div>{stars}</div>;
};
