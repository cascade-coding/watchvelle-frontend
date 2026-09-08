import React from "react";
import Header from "../components/shared/templates/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
