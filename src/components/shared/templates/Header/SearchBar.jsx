import { useState, useRef, useEffect } from "react";

import SearchIcon from "../../../icons/SearchIcon";
import Close from "../../../icons/Close";

const SearchForm = ({ inputRef, value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="w-full md:max-w-100">
    <div className="flex w-full h-12 px-4 items-center justify-between border-border border rounded-full">
      <input
        ref={inputRef}
        name="search"
        type="text"
        placeholder="Omega Seamaster"
        value={value}
        onChange={onChange}
        className="block h-full w-full outline-none placeholder:text-muted text-foreground text-sm"
      />
      <SearchIcon />
    </div>
  </form>
);

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".search-popup")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchValue);
    setIsOpen(false);
  };

  const handleChange = (e) => setSearchValue(e.target.value);

  return (
    <>
      {/* Desktop Search Bar */}
      <div className="hidden md:block w-full max-w-100">
        <SearchForm
          inputRef={inputRef}
          value={searchValue}
          onChange={handleChange}
          onSubmit={handleSearch}
        />
      </div>

      {/* Mobile Search Icon */}
      <button
        className="md:hidden p-2 mr-1.5 hover:bg-gray-100 rounded-full transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        aria-label="Open search"
      >
        <SearchIcon />
      </button>

      {/* Mobile Search Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-1">
          <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-2 pb-10 animate-in fade-in slide-in-from-top-4 duration-300 search-popup">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-foreground">Search</h3>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close search"
              >
                <Close />
              </button>
            </div>

            <SearchForm
              inputRef={inputRef}
              value={searchValue}
              onChange={handleChange}
              onSubmit={handleSearch}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
