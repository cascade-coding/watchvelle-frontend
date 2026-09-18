import React from "react";
import { cn } from "../../lib/utils";

const Previous = (className = "") => {
  return (
    <>
      <svg
        className={cn("size-6", className)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 4.5L8.25 12L15.75 19.5"
          stroke="#757575"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Previous;
