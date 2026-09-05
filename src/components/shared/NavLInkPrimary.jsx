import React from "react";
import { Link } from "react-router";
import { cn } from "../../lib/utils";

const NavLinkPrimary = ({
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
  const baseClasses =
    "text-foreground font-medium text-sm tracking-[0.5px] transition hover:text-gold";

  return (
    <li>
      <Link
        to={to}
        id={id}
        className={cn(baseClasses, isActive && activeClassName, className)}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLinkPrimary;
