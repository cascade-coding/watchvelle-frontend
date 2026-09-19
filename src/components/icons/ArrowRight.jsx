import { cn } from "../../lib/utils";

const ArrowRight = ({ className = "" }) => {
  return (
    <>
      <svg
        className={cn("size-4", className)}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 3L10.5 8L5.5 13"
          stroke="#757575"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default ArrowRight;
