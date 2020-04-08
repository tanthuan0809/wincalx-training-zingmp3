import React from "react";

// COMPONENTS
import MainContent from "./MainContent";
import SiderContent from "./SiderContent";

const ContentWrapper = () => {
  return (
    <div className="home-content-wrapper">
      <MainContent />
      <SiderContent />
    </div>
  );
};

export default ContentWrapper;
