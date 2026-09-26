import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import ArrowDownLight from "../icons/ArrowDownLight";
import { useSort, SORT_OPTIONS } from "../../store/useSort"

const SortDropdown = ({ asButtons = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const sort = useSort((state) => state.sort);
  const setSort = useSort((state) => state.setSort);

  const selected = SORT_OPTIONS.find((o) => o.value === sort);

  useEffect(() => {
    if (asButtons) return;

    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [asButtons]);

  useEffect(() => {
    if (asButtons) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [asButtons]);

  const handleSelect = (optionValue) => {
    setSort(optionValue);
    setIsOpen(false);
  };

  if (asButtons) {
    return (
      <div className="flex flex-wrap gap-2">
        {SORT_OPTIONS.map((option) => {
          const isSelected = option.value === sort;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setSort(option.value)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md border transition cursor-pointer",
                isSelected
                  ? "bg-gray-200 border-border text-foreground"
                  : "bg-white border-border text-foreground hover:bg-gray-100",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 cursor-pointer outline-none"
      >
        <span className="font-semibold text-sm uppercase text-foreground">
          {selected?.label}
        </span>
        <span
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        >
          <ArrowDownLight />
        </span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-20 mt-2 min-w-45 bg-white border border-border rounded-md shadow-lg py-1.5"
        >
          {SORT_OPTIONS.map((option) => {
            const isSelected = option.value === sort;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm uppercase transition hover:bg-gray-100 cursor-pointer",
                    isSelected ? "text-brand font-semibold" : "text-foreground",
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
