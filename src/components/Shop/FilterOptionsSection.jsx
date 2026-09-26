import { useState } from "react";
import { cn } from "../../lib/utils";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
import Check from "../icons/Check";

const DEFAULT_VISIBLE_COUNT = 8;

const FilterOptionsSection = ({
  title,
  options = [],
  selected = [],
  onToggle,
  visibleCount = DEFAULT_VISIBLE_COUNT,
  isExpanded = false,
  onToggleExpand = () => {},
  seeMoreLabel = "See More",
  seeLessLabel = "See Less",
  alwaysOpen = false,
  isLast = false,
  paddingX = "pl-6 pr-7",
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const hasMore = options.length > visibleCount;
  const visibleOptions = isExpanded ? options : options.slice(0, visibleCount);

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
          alwaysOpen ? "cursor-default" : "cursor-pointer"
        )}
      >
        <h3 className="font-bold text-base tracking-[1.2px] text-brand uppercase">
          {title}
        </h3>
        {isOpen ? <Minus /> : <Plus />}
      </button>

      {isOpen && (
        <div className="pb-5">
          <ul className="flex flex-col gap-3">
            {visibleOptions.map((option) => (
              <li key={option}>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => onToggle(option)}
                    className="peer sr-only"
                  />
                  <span className="w-4 h-4 border border-[#CFCAC2] rounded-sm bg-white flex items-center justify-center transition-colors peer-checked:bg-brand peer-checked:border-brand">
                    <Check />
                  </span>
                  <span className="text-foreground font-medium text-sm pl-2 select-none">
                    {option}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              type="button"
              onClick={onToggleExpand}
              className="mt-3.5 font-semibold text-sm tracking-[1.2px] text-foreground underline underline-offset-2 hover:cursor-pointer"
            >
              {isExpanded ? seeLessLabel : seeMoreLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterOptionsSection;