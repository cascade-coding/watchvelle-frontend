import React from "react";
import Header from "../components/shared/templates/Header/Header";
import FooterPrimary from "../components/shared/templates/Footer/FooterPrimary";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <FooterPrimary />
    </main>
  );
};

export default MainLayout;
