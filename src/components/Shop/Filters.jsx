import useFilters, { FILTER_OPTIONS, PARAM_KEYS } from "../../hooks/useFilters";

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
    // state
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
    showAllBrands,
    showAllFeatures,

    // setters
    setPriceMin,
    setPriceMax,
    setCaseMin,
    setCaseMax,
    setShowAllBrands,
    setShowAllFeatures,

    // derived
    selectedChips,
    hasAnySelection,

    // actions
    toggleItem,
    handleClearAll,
    removeFilter,

    // ❌ REMOVED: PARAM_KEYS (now a named export, imported above)
  } = useFilters();

  return (
    <div>
      {/* Header */}
      <div>
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
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => removeFilter(chip)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-full text-foreground hover:bg-gray-100 transition"
              >
                <span>{chip}</span>
                <span className="text-muted">×</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* BRAND */}
      <div>
        <h3>BRAND</h3>
        <ul>
          {(showAllBrands ? BRANDS : BRANDS.slice(0, 5)).map((brand) => (
            <li key={brand}>
              <label>
                <input
                  type="checkbox"
                  checked={brands.includes(brand)}
                  onChange={() => toggleItem(PARAM_KEYS.brands, brand)}
                />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => setShowAllBrands((p) => !p)}>
          {showAllBrands ? "See Less" : "See More"}
        </button>
      </div>

      {/* Price */}
      <div>
        <h3>Price</h3>
        <ul>
          {PRICE_RANGES.map((range) => (
            <li key={range}>
              <label>
                <input
                  type="checkbox"
                  checked={priceRanges.includes(range)}
                  onChange={() => toggleItem(PARAM_KEYS.priceRanges, range)}
                />
                <span>{range}</span>
              </label>
            </li>
          ))}
        </ul>

        <div>
          <label>
            <span>Min</span>
            <input
              type="number"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
          </label>
          <label>
            <span>Max</span>
            <input
              type="number"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Case Diameter */}
      <div>
        <h3>Case Diameter</h3>
        <ul>
          {CASE_DIAMETERS.map((size) => (
            <li key={size}>
              <label>
                <input
                  type="checkbox"
                  checked={caseDiameters.includes(size)}
                  onChange={() => toggleItem(PARAM_KEYS.caseDiameters, size)}
                />
                <span>{size}</span>
              </label>
            </li>
          ))}
        </ul>

        <div>
          <label>
            <span>Min</span>
            <input
              type="number"
              placeholder="Min"
              value={caseMin}
              onChange={(e) => setCaseMin(e.target.value)}
            />
          </label>
          <label>
            <span>Max</span>
            <input
              type="number"
              placeholder="Max"
              value={caseMax}
              onChange={(e) => setCaseMax(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Gender */}
      <div>
        <h3>Gender</h3>
        <ul>
          {GENDERS.map((gender) => (
            <li key={gender}>
              <label>
                <input
                  type="checkbox"
                  checked={genders.includes(gender)}
                  onChange={() => toggleItem(PARAM_KEYS.genders, gender)}
                />
                <span>{gender}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* WATCH STYLES */}
      <div>
        <h3>WATCH STYLES</h3>
        <ul>
          {WATCH_STYLES.map((style) => (
            <li key={style}>
              <label>
                <input
                  type="checkbox"
                  checked={watchStyles.includes(style)}
                  onChange={() => toggleItem(PARAM_KEYS.watchStyles, style)}
                />
                <span>{style}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Movement */}
      <div>
        <h3>Movement</h3>
        <ul>
          {MOVEMENTS.map((movement) => (
            <li key={movement}>
              <label>
                <input
                  type="checkbox"
                  checked={movements.includes(movement)}
                  onChange={() => toggleItem(PARAM_KEYS.movements, movement)}
                />
                <span>{movement}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Watch Features */}
      <div>
        <h3>Watch Features</h3>
        <ul>
          {(showAllFeatures ? WATCH_FEATURES : WATCH_FEATURES.slice(0, 5)).map(
            (feature) => (
              <li key={feature}>
                <label>
                  <input
                    type="checkbox"
                    checked={watchFeatures.includes(feature)}
                    onChange={() =>
                      toggleItem(PARAM_KEYS.watchFeatures, feature)
                    }
                  />
                  <span>{feature}</span>
                </label>
              </li>
            ),
          )}
        </ul>
        <button type="button" onClick={() => setShowAllFeatures((p) => !p)}>
          {showAllFeatures ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Filters;
