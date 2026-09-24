import useFilters, { FILTER_OPTIONS, PARAM_KEYS } from "../../hooks/useFilters";
import FilterOptionsSection from "./FilterOptionsSection";
import FilterRangeSection from "./FilterRangeSection";

const {
  BRANDS,
  PRICE_RANGES,
  CASE_DIAMETERS,
  GENDERS,
  WATCH_STYLES,
  MOVEMENTS,
  WATCH_FEATURES,
} = FILTER_OPTIONS;

const Filters = () => {
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

  return (
    <div>
      {/* Header */}
      <div className="pb-5 border-b border-border pl-6 pr-7">
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

        {/* Selected filter chips */}
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

      {/* BRAND */}
      <FilterOptionsSection
        title="Brand"
        options={BRANDS}
        selected={brands}
        visibleCount={6}
        onToggle={(brand) => toggleItem(PARAM_KEYS.brands, brand)}
        isExpanded={expandedSections[PARAM_KEYS.brands]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.brands)}
      />

      {/* Price */}
      <FilterRangeSection
        title="Price"
        options={PRICE_RANGES}
        selected={priceRanges}
        onToggle={(range) => toggleItem(PARAM_KEYS.priceRanges, range)}
        minValue={priceMin}
        maxValue={priceMax}
        onMinChange={setPriceMin}
        onMaxChange={setPriceMax}
      />

      {/* Case Diameter */}
      <FilterRangeSection
        title="Case Diameter"
        options={CASE_DIAMETERS}
        selected={caseDiameters}
        onToggle={(range) => toggleItem(PARAM_KEYS.caseDiameters, range)}
        minValue={caseMin}
        maxValue={caseMax}
        onMinChange={setCaseMin}
        onMaxChange={setCaseMax}
      />

      {/* Gender */}
      <FilterOptionsSection
        title="Gender"
        options={GENDERS}
        selected={genders}
        onToggle={(gender) => toggleItem(PARAM_KEYS.genders, gender)}
        isExpanded={expandedSections[PARAM_KEYS.genders]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.genders)}
      />

      {/* WATCH STYLES */}
      <FilterOptionsSection
        title="Watch Styles"
        options={WATCH_STYLES}
        selected={watchStyles}
        onToggle={(style) => toggleItem(PARAM_KEYS.watchStyles, style)}
        isExpanded={expandedSections[PARAM_KEYS.watchStyles]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.watchStyles)}
      />

      {/* Movement */}
      <FilterOptionsSection
        title="Movement"
        options={MOVEMENTS}
        selected={movements}
        onToggle={(movement) => toggleItem(PARAM_KEYS.movements, movement)}
        isExpanded={expandedSections[PARAM_KEYS.movements]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.movements)}
      />

      {/* Watch Features */}
      <FilterOptionsSection
        title="Watch Features"
        options={WATCH_FEATURES}
        selected={watchFeatures}
        visibleCount={6}
        onToggle={(feature) => toggleItem(PARAM_KEYS.watchFeatures, feature)}
        isExpanded={expandedSections[PARAM_KEYS.watchFeatures]}
        onToggleExpand={() => toggleExpanded(PARAM_KEYS.watchFeatures)}
        isLast
      />
    </div>
  );
};

export default Filters;
