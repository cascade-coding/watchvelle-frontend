import { useApp } from "../../hooks/useApp";
import useFilters, { FILTER_OPTIONS, PARAM_KEYS } from "../../hooks/useFilters";
import FilterOptionsSection from "./FilterOptionsSection";
import FilterRangeSection from "./FilterRangeSection";
import SortDropdown from "./SortDropdown";
import Close from "../icons/Close";
import { cn } from "../../lib/utils";

const {
  BRANDS,
  PRICE_RANGES,
  CASE_DIAMETERS,
  GENDERS,
  WATCH_STYLES,
  MOVEMENTS,
  WATCH_FEATURES,
} = FILTER_OPTIONS;

const Filters = ({ isDrawer = false }) => {
  const closeFilters = useApp((state) => state.closeFilters);

  const {
    brands,
    priceRanges,
    priceMin,
    priceMax,
    caseDiameters,
    caseMin,
    caseMax,
    genders,
    watchStyles,
    movements,
    watchFeatures,

    expandedSections,
    toggleExpanded,

    setPriceMin,
    setPriceMax,
    setCaseMin,
    setCaseMax,

    selectedChips,
    hasAnySelection,

    toggleItem,
    handleClearAll,
    removeFilter,
  } = useFilters();

  const paddingX = isDrawer ? "px-2.5" : "pl-6 pr-7";

  return (
    <div className={cn(isDrawer ? "pb-20" : "pb-0")}>
      {isDrawer && (
        <div className={cn("lg:hidden flex justify-end pt-4 pb-6", paddingX)}>
          <button
            type="button"
            onClick={closeFilters}
            aria-label="Close filters"
            className="p-1 text-muted hover:text-foreground cursor-pointer transition"
          >
            <Close />
          </button>
        </div>
      )}

      <div className={cn("pb-5 border-b border-border", paddingX)}>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg tracking-[1.6px] text-brand uppercase">
            Filters
          </h4>

          <button
            type="button"
            onClick={handleClearAll}
            className="h-9.5 px-5 border border-border rounded-full text-sm text-foreground hover:cursor-pointer hover:bg-gray-100 transition"
          >
            Clear All
          </button>
        </div>

        {hasAnySelection && (
          <div className="flex flex-wrap gap-2.5 mt-4.5">
            {selectedChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => removeFilter(chip)}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs border border-border rounded-sm text-foreground hover:bg-gray-100 transition"
              >
                <span>{chip}</span>
                <span className="text-muted text-lg leading-0">×</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {isDrawer && (
        <div className={cn("pt-5 pb-5 border-b border-border", paddingX)}>
          <h3 className="font-bold text-base tracking-[1.2px] text-brand uppercase pb-3">
            Sort By
          </h3>
          <SortDropdown asButtons />
        </div>
      )}

      <FilterOptionsSection
        title="Brand"
        options={BRANDS}
        selected={brands}
        visibleCount={6}
        onToggle={(brand) => toggleItem(PARAM_KEYS.brands, brand)}
        isExpanded={expandedSections[PARAM_KEYS.brands]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.brands)}
        paddingX={paddingX}
      />

      <FilterRangeSection
        title="Price"
        options={PRICE_RANGES}
        selected={priceRanges}
        onToggle={(range) => toggleItem(PARAM_KEYS.priceRanges, range)}
        minValue={priceMin}
        maxValue={priceMax}
        onMinChange={setPriceMin}
        onMaxChange={setPriceMax}
        paddingX={paddingX}
      />

      <FilterRangeSection
        title="Case Diameter"
        options={CASE_DIAMETERS}
        selected={caseDiameters}
        onToggle={(range) => toggleItem(PARAM_KEYS.caseDiameters, range)}
        minValue={caseMin}
        maxValue={caseMax}
        onMinChange={setCaseMin}
        onMaxChange={setCaseMax}
        paddingX={paddingX}
      />

      <FilterOptionsSection
        title="Gender"
        options={GENDERS}
        selected={genders}
        onToggle={(gender) => toggleItem(PARAM_KEYS.genders, gender)}
        isExpanded={expandedSections[PARAM_KEYS.genders]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.genders)}
        paddingX={paddingX}
      />

      <FilterOptionsSection
        title="Watch Styles"
        options={WATCH_STYLES}
        selected={watchStyles}
        onToggle={(style) => toggleItem(PARAM_KEYS.watchStyles, style)}
        isExpanded={expandedSections[PARAM_KEYS.watchStyles]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.watchStyles)}
        paddingX={paddingX}
      />

      <FilterOptionsSection
        title="Movement"
        options={MOVEMENTS}
        selected={movements}
        onToggle={(movement) => toggleItem(PARAM_KEYS.movements, movement)}
        isExpanded={expandedSections[PARAM_KEYS.movements]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.movements)}
        paddingX={paddingX}
      />

      <FilterOptionsSection
        title="Watch Features"
        options={WATCH_FEATURES}
        selected={watchFeatures}
        visibleCount={6}
        onToggle={(feature) => toggleItem(PARAM_KEYS.watchFeatures, feature)}
        isExpanded={expandedSections[PARAM_KEYS.watchFeatures]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.watchFeatures)}
        isLast
        paddingX={paddingX}
      />
    </div>
  );
};

export default Filters;
