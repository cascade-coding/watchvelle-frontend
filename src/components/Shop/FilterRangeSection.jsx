import { useState } from "react";
import { cn } from "../../lib/utils";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

const FilterRangeSection = ({
  title,
  options = [],
  selected = [],
  onToggle,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minPlaceholder = "Min",
  maxPlaceholder = "Max",
  inputType = "number",
  alwaysOpen = false,
  isLast = false,
  paddingX = "pl-6 pr-7",
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleHeaderClick = () => {
    if (alwaysOpen) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cn(paddingX, !isLast && "border-b border-border")}>
      <button
        type="button"
        onClick={handleHeaderClick}
        disabled={alwaysOpen}
        aria-expanded={isOpen}
        className={cn(
          "flex items-center justify-between w-full py-4",
          alwaysOpen ? "cursor-default" : "cursor-pointer",
        )}
      >
        <h3 className="font-bold text-base tracking-[1.2px] text-brand uppercase">
          {title}
        </h3>
        {isOpen ? <Minus /> : <Plus />}
      </button>

      {isOpen && (
        <div className="pb-6">
          <ul className="grid grid-cols-2 gap-1.5">
            {options.map((option) => {
              const isSelected = selected.includes(option);
              return (
                <li key={option}>
                  <label className="cursor-pointer block">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToggle(option)}
                      className="sr-only peer"
                    />
                    <span
                      className={cn(
                        "block w-full text-center px-3 py-2 text-sm font-medium text-foreground rounded-md border transition border-border select-none",
                        isSelected
                          ? "bg-gray-200"
                          : "bg-white hover:bg-gray-200",
                      )}
                    >
                      {option}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>

          <div className="grid grid-cols-2 gap-1.5 mt-3">
            <label className="sr-only" htmlFor={`${title}-min`}>
              Min
            </label>
            <input
              id={`${title}-min`}
              type={inputType}
              placeholder={minPlaceholder}
              value={minValue}
              onChange={(e) => onMinChange(e.target.value)}
              className="block w-full text-center px-3 py-2 text-sm font-medium text-foreground rounded-md border border-border bg-white outline-none focus:border-brand transition"
            />

            <label className="sr-only" htmlFor={`${title}-max`}>
              Max
            </label>
            <input
              id={`${title}-max`}
              type={inputType}
              placeholder={maxPlaceholder}
              value={maxValue}
              onChange={(e) => onMaxChange(e.target.value)}
              className="block w-full text-center px-3 py-2 text-sm font-medium text-foreground rounded-md border border-border bg-white outline-none focus:border-brand transition"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterRangeSection;
