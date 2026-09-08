import React from "react";
import { Link } from "react-router";
import { cn } from "../../../../lib/utils";

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
  return (
    <li>
      <Link
        to={to}
        id={id}
        className={cn(
          "text-foreground text-base tracking-[0.5px] transition hover:text-gold",
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

export default NavLinkPrimary;
