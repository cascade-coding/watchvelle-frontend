import { cn } from "../../lib/utils";

const Plus = ({ className = "" }) => {
  return (
    <>
      <svg
        className={cn("size-5", className)}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10H15M10 5V15"
          stroke="#757575"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Plus;
