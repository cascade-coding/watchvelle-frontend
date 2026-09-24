import { cn } from "../../lib/utils";

const Minus = ({ className = "" }) => {
  return (
    <>
      <svg
        className={cn("size-5", className)}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10H15"
          stroke="#757575"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Minus;
