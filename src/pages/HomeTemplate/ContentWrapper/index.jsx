// libs import
import React from "react";

// components
import MainContents from "./main/MainContents";
import SiderContents from "./main/SiderContents";
// style
import "./style.scss";

/**
 * ContentWrapper - description a wrapper of all content component
 */

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <div className="content-wrapper-inner">
        <MainContents />
        <SiderContents />
      </div>
    </div>
  );
};

export default ContentWrapper;
