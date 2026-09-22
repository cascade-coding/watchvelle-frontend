import { useState } from "react";
import { cn } from "../../lib/utils";

const TOTAL_STARS = 5;

const FilledStar = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.37919 0C5.14995 0 4.92071 0.118644 4.80206 0.357942L3.48894 3.02039L0.550999 3.4467C0.0241405 3.52311 -0.187005 4.17264 0.195068 4.54466L2.3206 6.61589L1.81787 9.54177C1.72738 10.0666 2.28038 10.4668 2.75093 10.2194L5.37919 8.83996V0Z"
      fill="#B38E4D"
    />
    <path
      d="M5.34542 0C5.57466 0 5.8039 0.118644 5.92255 0.357942L7.23567 3.02039L10.1736 3.4467C10.7005 3.52311 10.9116 4.17264 10.5295 4.54466L8.40401 6.61589L8.90674 9.54177C8.99723 10.0666 8.44423 10.4668 7.97368 10.2194L5.34542 8.83996V0Z"
      fill="#B38E4D"
    />
  </svg>
);

const EmptyStar = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_715_1373)">
      <path
        d="M5.34737 7.74803L7.84693 9.06317L7.37034 6.28007L9.39332 4.30938L6.59816 3.90318L5.34737 1.36943V0C5.57661 0 5.80586 0.118644 5.9245 0.357942L7.23762 3.02039L10.1756 3.4467C10.7024 3.52311 10.9136 4.17264 10.5315 4.54466L8.40596 6.61589L8.90869 9.54177C8.99918 10.0666 8.44618 10.4668 7.97563 10.2194L5.34737 8.83996V7.74803Z"
        fill="#757575"
        fillOpacity="0.6"
      />
    </g>
    <g clipPath="url(#clip1_715_1373)">
      <path
        d="M5.37919 7.74803L2.87963 9.06317L3.35622 6.28007L1.33324 4.30938L4.12841 3.90318L5.37919 1.36943V0C5.14995 0 4.92071 0.118644 4.80206 0.357942L3.48894 3.02039L0.550999 3.4467C0.0241405 3.52311 -0.187005 4.17264 0.195068 4.54466L2.3206 6.61589L1.81787 9.54177C1.72738 10.0666 2.28038 10.4668 2.75093 10.2194L5.37919 8.83996V7.74803Z"
        fill="#757575"
        fillOpacity="0.6"
      />
    </g>
    <defs>
      <clipPath id="clip0_715_1373">
        <rect
          width="5.37959"
          height="10.2959"
          fill="white"
          transform="translate(5.36328)"
        />
      </clipPath>
      <clipPath id="clip1_715_1373">
        <rect width="5.37959" height="10.2959" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const RatingInput = ({
  value = 0,
  onChange,
  size = 22,
  className = "",
  gap = "gap-1.5",
  readOnly = false,
}) => {
  const [hovered, setHovered] = useState(0);

  const displayValue = hovered || value;

  return (
    <div
      className={cn("flex items-center", gap, className)}
      role="radiogroup"
      aria-label="Rating"
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: TOTAL_STARS }).map((_, i) => {
        const starNumber = i + 1;
        const isFilled = starNumber <= displayValue;

        return (
          <button
            key={starNumber}
            type="button"
            role="radio"
            aria-checked={value === starNumber}
            aria-label={`${starNumber} star${starNumber > 1 ? "s" : ""}`}
            disabled={readOnly}
            onMouseEnter={() => !readOnly && setHovered(starNumber)}
            onClick={() => !readOnly && onChange?.(starNumber)}
            className={cn(
              "transition-transform duration-150",
              !readOnly && "cursor-pointer hover:scale-110 active:scale-95",
              readOnly && "cursor-default",
            )}
          >
            {isFilled ? <FilledStar size={size} /> : <EmptyStar size={size} />}
          </button>
        );
      })}
    </div>
  );
};

export default RatingInput;
