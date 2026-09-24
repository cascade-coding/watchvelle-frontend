import { useState } from "react";
import { useSearchParams } from "react-router";

const BRANDS = [
  "Omega",
  "Rolex",
  "Longines",
  "Breitling",
  "Tissot",
  "Casio",
  "Seiko",
];

const PRICE_RANGES = [
  "< $100",
  "$100-$300",
  "$300-$500",
  "$500-$1,000",
  "$1,000-$5,000",
  "$5,000+",
];

const CASE_DIAMETERS = ["< 30", "30-35", "35-40", "40-45", "45-50", "50+"];
const GENDERS = ["Men's", "Women's", "Unisex"];
const WATCH_STYLES = [
  "Casual",
  "Dive",
  "Dress",
  "Fashion",
  "Luxury",
  "Military",
  "Pilot",
];
const MOVEMENTS = ["Automatic", "Eco-Drive", "Hand Wind", "Quartz"];
const WATCH_FEATURES = [
  "Alarm",
  "Analog",
  "Annual Calendar",
  "Chronograph",
  "Digital",
  "Compass",
];

export const FILTER_OPTIONS = {
  BRANDS,
  PRICE_RANGES,
  CASE_DIAMETERS,
  GENDERS,
  WATCH_STYLES,
  MOVEMENTS,
  WATCH_FEATURES,
};

export const PARAM_KEYS = {
  brands: "brand",
  priceRanges: "priceRange",
  priceMin: "priceMin",
  priceMax: "priceMax",
  caseDiameters: "caseDiameter",
  caseMin: "caseMin",
  caseMax: "caseMax",
  genders: "gender",
  watchStyles: "style",
  movements: "movement",
  watchFeatures: "feature",
};

const buildRangeChip = (min, max, { prefix = "", suffix = "" } = {}) => {
  if (!min && !max) return null;
  if (min && max) return `${prefix}${min}${suffix} - ${prefix}${max}${suffix}`;
  if (min) return `From ${prefix}${min}${suffix}`;
  return `Up to ${prefix}${max}${suffix}`;
};

const readMulti = (params, key) => params.getAll(key);

const readSingle = (params, key) => params.get(key) ?? "";

const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read all filter values from the URL
  const brands = readMulti(searchParams, PARAM_KEYS.brands);
  const priceRanges = readMulti(searchParams, PARAM_KEYS.priceRanges);
  const priceMin = readSingle(searchParams, PARAM_KEYS.priceMin);
  const priceMax = readSingle(searchParams, PARAM_KEYS.priceMax);
  const caseDiameters = readMulti(searchParams, PARAM_KEYS.caseDiameters);
  const caseMin = readSingle(searchParams, PARAM_KEYS.caseMin);
  const caseMax = readSingle(searchParams, PARAM_KEYS.caseMax);
  const genders = readMulti(searchParams, PARAM_KEYS.genders);
  const watchStyles = readMulti(searchParams, PARAM_KEYS.watchStyles);
  const movements = readMulti(searchParams, PARAM_KEYS.movements);
  const watchFeatures = readMulti(searchParams, PARAM_KEYS.watchFeatures);

  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const updateMultiParam = (key, value, shouldAdd) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        const existing = next.getAll(key);

        if (shouldAdd) {
          if (!existing.includes(value)) next.append(key, value);
        } else {
          next.delete(key);
          existing
            .filter((v) => v !== value)
            .forEach((v) => next.append(key, v));
        }

        return next;
      },
      { replace: false },
    );
  };

  const updateSingleParam = (key, value) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) next.set(key, value);
        else next.delete(key);
        return next;
      },
      { replace: true },
    );
  };

  const toggleItem = (key, value) => {
    if (!key || value === undefined || value === null || value === "") {
      console.warn("toggleItem: invalid key or value", { key, value });
      return;
    }

    const current = searchParams.getAll(key);
    const shouldAdd = !current.includes(value);
    updateMultiParam(key, value, shouldAdd);
  };

  const setPriceMin = (value) => updateSingleParam(PARAM_KEYS.priceMin, value);
  const setPriceMax = (value) => updateSingleParam(PARAM_KEYS.priceMax, value);
  const setCaseMin = (value) => updateSingleParam(PARAM_KEYS.caseMin, value);
  const setCaseMax = (value) => updateSingleParam(PARAM_KEYS.caseMax, value);

  const handleClearAll = () => {
    setSearchParams({}, { replace: true });
  };

  const priceChip = buildRangeChip(priceMin, priceMax, { prefix: "$" });
  const caseChip = buildRangeChip(caseMin, caseMax, { suffix: "mm" });

  const selectedChips = [
    ...brands,
    ...priceRanges,
    ...caseDiameters,
    ...genders,
    ...watchStyles,
    ...movements,
    ...watchFeatures,
    ...(priceChip ? [priceChip] : []),
    ...(caseChip ? [caseChip] : []),
  ].filter(Boolean);

  const hasAnySelection = selectedChips.length > 0;

  // Remove a single chip
  const removeFilter = (chip) => {
    if (!chip) return;

    const multiSections = [
      PARAM_KEYS.brands,
      PARAM_KEYS.priceRanges,
      PARAM_KEYS.caseDiameters,
      PARAM_KEYS.genders,
      PARAM_KEYS.watchStyles,
      PARAM_KEYS.movements,
      PARAM_KEYS.watchFeatures,
    ];

    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);

        multiSections.forEach((key) => {
          const existing = next.getAll(key);
          if (existing.includes(chip)) {
            next.delete(key);
            existing
              .filter((v) => v !== chip)
              .forEach((v) => next.append(key, v));
          }
        });

        // clear min and max
        if (chip === priceChip) {
          next.delete(PARAM_KEYS.priceMin);
          next.delete(PARAM_KEYS.priceMax);
        }
        if (chip === caseChip) {
          next.delete(PARAM_KEYS.caseMin);
          next.delete(PARAM_KEYS.caseMax);
        }

        return next;
      },
      { replace: false },
    );
  };

  return {
    // state values
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

    // variables
    selectedChips,
    hasAnySelection,

    // actions
    toggleItem,
    handleClearAll,
    removeFilter,
  };
};

export default useFilters;
