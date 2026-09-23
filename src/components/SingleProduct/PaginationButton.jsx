import React from "react";

const PaginationButton = ({ onClick, disabled, children, ariaLabel }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className="px-3 py-2 bg-white hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed border border-border rounded-sm hover:cursor-pointer"
  >
    {children}
  </button>
);

export default PaginationButton;
