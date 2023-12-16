import { StarType } from "src/types";

interface Props {
  type: StarType;
}
export const StarIcon: React.FC<Props> = ({ type }) => {
  const paintedStarColor = type === StarType.ACTIVE ? "#ED8A19" : "#d3d3d3";

  // active or inactive
  const paintedStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
    >
      <polygon
        fill={paintedStarColor}
        fillRule="evenodd"
        points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"
      />
    </svg>
  );
  // half painted star
  const halfPaintedStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <polygon
          fill="#000000"
          fillOpacity=".2"
          points="12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"
        />
        <polygon
          fill="#ED8A19"
          points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"
        />
      </g>
    </svg>
  );

  return type in [StarType.ACTIVE, StarType.INACTIVE]
    ? paintedStar
    : halfPaintedStar;
};
