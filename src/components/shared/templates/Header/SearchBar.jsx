import SearchIcon from "../../../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="w-full max-w-100 h-12 flex px-4 items-center justify-between border-border border rounded-full">
      <input
        name="search"
        type="text"
        placeholder="Omega Seamaster"
        className="block h-full w-full outline-none placeholder:text-muted text-foreground text-sm"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
