import { useState } from "react";
import ArrowDown from "../icons/ArrowDown";

// Convert camelCase keys → "Title Case"
const formatKey = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();

const ProductSpecTable = ({
  title,
  specs = {},
  alwaysOpen = false,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(alwaysOpen || defaultOpen);

  const entries = Object.entries(specs);

  if (!entries.length) return null;

  const handleToggle = () => {
    if (alwaysOpen) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        disabled={alwaysOpen}
        className={`w-full h-12 flex items-center gap-1.5 px-1.5 bg-[#F5F5F5] border-b border-border mb-2 ${
          alwaysOpen ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <ArrowDown
          className={`transition-transform duration-200 ${
            isOpen ? "" : "-rotate-90"
          }`}
        />
        <h3 className="font-brand font-bold uppercase text-base md:text-lg text-brand tracking-[1px]">
          {title}
        </h3>
      </button>

      {/* Content — collapsible */}
      {isOpen && (
        <dl className="divide-y divide-border">
          {entries.map(([key, value]) => (
            <div key={key} className="flex items-center gap-6 min-h-11.5">
              <dt className="font-semibold text-base text-foreground w-1/3 max-w-45 sm:max-w-55">
                {formatKey(key)}
              </dt>
              <dd className="font-normal text-muted flex-1 min-w-0 wrap-break-word">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
};

export default ProductSpecTable;
