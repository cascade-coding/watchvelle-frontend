import React from "react";
import HeaderPrimary from "./HeaderPrimary";
import HeaderSecondary from "./HeaderSecondary";

const Header = () => {
  return (
    <div className="border-b border-border">
      <HeaderPrimary />
      <HeaderSecondary />
    </div>
  );
};

export default Header;
