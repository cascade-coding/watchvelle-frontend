import { useState } from "react";

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

const Filters = () => {
  const [brands, setBrands] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [caseDiameters, setCaseDiameters] = useState([]);
  const [caseMin, setCaseMin] = useState("");
  const [caseMax, setCaseMax] = useState("");
  const [genders, setGenders] = useState([]);
  const [watchStyles, setWatchStyles] = useState([]);
  const [movements, setMovements] = useState([]);
  const [watchFeatures, setWatchFeatures] = useState([]);

  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Generic toggle for multi-select arrays
  const toggleItem = (setter, value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleClearAll = () => {
    setBrands([]);
    setPriceRanges([]);
    setPriceMin("");
    setPriceMax("");
    setCaseDiameters([]);
    setCaseMin("");
    setCaseMax("");
    setGenders([]);
    setWatchStyles([]);
    setMovements([]);
    setWatchFeatures([]);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2>Filters</h2>
        <button type="button" onClick={handleClearAll}>
          Clear All
        </button>
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
                  onChange={() => toggleItem(setBrands, brand)}
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
                  onChange={() => toggleItem(setPriceRanges, range)}
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
                  onChange={() => toggleItem(setCaseDiameters, size)}
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
                  onChange={() => toggleItem(setGenders, gender)}
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
                  onChange={() => toggleItem(setWatchStyles, style)}
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
                  onChange={() => toggleItem(setMovements, movement)}
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
                    onChange={() => toggleItem(setWatchFeatures, feature)}
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
