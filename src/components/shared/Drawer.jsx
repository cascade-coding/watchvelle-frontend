import { useEffect } from "react";
import { cn } from "../../lib/utils";

const Drawer = ({ isOpen, onClose, children, className = "" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 bg-gray-900/50 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-full sm:w-80 flex-col overflow-y-auto bg-white border-r border-border transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
