import { cn } from "../../lib/utils";

const ArrowDown = ({ className = "" }) => {
  return (
    <>
      <svg
        className={cn("w-4.25 h-6", className)}
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.172 17.5898L0.918 5.04384H15.408L8.172 17.5898Z"
          fill="#C5A46D"
        />
      </svg>
    </>
  );
};

export default ArrowDown;
