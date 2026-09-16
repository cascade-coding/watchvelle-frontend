import React from "react";
import { Link } from "react-router";
import { cn } from "../../../../lib/utils";

const FooterLink = ({ to = "#", children, className = "", ...props }) => {
  return (
    <Link
      to={to}
      className={cn(
        "font-medium text-[15px] text-muted tracking-[1.5px] transition hover:opacity-75",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
