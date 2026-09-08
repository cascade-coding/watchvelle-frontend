import React from "react";
import CallCTA from "./CallCTA";
import Container from "../../Container";
import SearchBar from "./SearchBar";

const HeaderSecondary = () => {
  return (
    <div className="bg-white">
      <Container className="h-17.5 flex items-center justify-between">
        <CallCTA />
        <SearchBar />
      </Container>
    </div>
  );
};

export default HeaderSecondary;
