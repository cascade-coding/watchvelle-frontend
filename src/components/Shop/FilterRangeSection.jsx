import { useState } from "react";

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
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleHeaderClick = () => {
    if (alwaysOpen) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header — collapsible trigger */}
      <button
        type="button"
        onClick={handleHeaderClick}
        disabled={alwaysOpen}
        aria-expanded={isOpen}
        className={alwaysOpen ? "cursor-default" : "cursor-pointer"}
      >
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {/* Content */}
      {isOpen && (
        <>
          <ul>
            {options.map((option) => (
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

          <div>
            <label>
              <span>Min</span>
              <input
                type={inputType}
                placeholder={minPlaceholder}
                value={minValue}
                onChange={(e) => onMinChange(e.target.value)}
              />
            </label>
            <label>
              <span>Max</span>
              <input
                type={inputType}
                placeholder={maxPlaceholder}
                value={maxValue}
                onChange={(e) => onMaxChange(e.target.value)}
              />
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterRangeSection;
