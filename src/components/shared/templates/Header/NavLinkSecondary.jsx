import React from "react";
import { Link } from "react-router";
import { cn } from "../../../../lib/utils";

const NavLinkSecondary = ({
  to = "#",
  children,
  className = "",
  id = "",
  onClick = null,
  target = "",
  rel = "",
  activeClassName = "text-gold",
  isActive = false,
}) => {
  return (
    <li>
      <Link
        to={to}
        id={id}
        className={cn(
          "block text-foreground text-base tracking-[0.5px] transition duration-200 hover:text-gold rounded-lg px-3 py-2 hover:bg-gray-50",
          isActive && activeClassName,
          className,
        )}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLinkSecondary;
