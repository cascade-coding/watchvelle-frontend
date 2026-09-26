import { useApp } from "../../hooks/useApp";
import Drawer from "../shared/Drawer";
import Filters from "./Filters";

const FiltersDrawer = () => {
  const isFiltersOpen = useApp((state) => state.isFiltersOpen);
  const closeFilters = useApp((state) => state.closeFilters);

  return (
    <Drawer isOpen={isFiltersOpen} onClose={closeFilters}>
      <Filters isDrawer />
    </Drawer>
  );
};

export default FiltersDrawer;