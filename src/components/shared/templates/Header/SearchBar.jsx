import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../../lib/utils";

import SearchIcon from "../../../icons/SearchIcon"

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
    // Handle search logic here
    console.log("Searching for:", searchValue);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Search Bar - Hidden on Mobile */}
      <div className="hidden md:flex w-full max-w-100 h-12 px-4 items-center justify-between border-border border rounded-full">
        <input
          ref={inputRef}
          name="search"
          type="text"
          placeholder="Omega Seamaster"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="block h-full w-full outline-none placeholder:text-muted text-foreground text-sm"
        />
        <button type="submit" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>

      {/* Mobile Search Icon - Visible on Mobile */}
      <button
        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
      >
        <SearchIcon />
      </button>

      {/* Mobile Search Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4 search-popup">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Search</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close search"
              >
                Cl 
              </button>
            </div>

            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="flex-1 h-12 px-4 flex items-center border-border border rounded-full bg-gray-50">
                <input
                  ref={inputRef}
                  name="search"
                  type="text"
                  placeholder="Omega Seamaster"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="block h-full w-full outline-none placeholder:text-muted text-foreground text-sm bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="h-12 px-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;