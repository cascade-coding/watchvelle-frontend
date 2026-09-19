import { cn } from "../../lib/utils";

const Next = ({ className = "" }) => {
  return (
    <>
      <svg
        className={cn("size-6", className)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 4.5L15.75 12L8.25 19.5"
          stroke="#757575"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Next;
