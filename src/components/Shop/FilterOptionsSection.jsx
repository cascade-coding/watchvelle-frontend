import { useState } from "react";
import { cn } from "../../lib/utils";

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
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const hasMore = options.length > visibleCount;
  const visibleOptions = isExpanded ? options : options.slice(0, visibleCount);

  const handleHeaderClick = () => {
    if (alwaysOpen) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleHeaderClick}
        disabled={alwaysOpen}
        aria-expanded={isOpen}
        className={cn(
          "flex items-center justify-between w-full",
          alwaysOpen ? "cursor-default" : "cursor-pointer",
        )}
      >
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <>
          <ul>
            {visibleOptions.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => onToggle(option)}
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button type="button" onClick={onToggleExpand}>
              {isExpanded ? seeLessLabel : seeMoreLabel}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default FilterOptionsSection;
