import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import ArrowDownLight from "../icons/ArrowDownLight";

const SortDropdown = ({ options = [], value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 cursor-pointer outline-none"
      >
        <span className="font-semibold text-sm uppercase text-foreground">{selected?.label}</span>
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
          {options.map((option) => {
            const isSelected = option.value === value;
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
