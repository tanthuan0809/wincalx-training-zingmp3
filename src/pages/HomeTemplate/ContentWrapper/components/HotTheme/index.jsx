// libs import
import React from "react";

// components
import HotThemeTitle from "./main/HotThemeTitle";
import HotThemeList from "./main/HotThemeList";
import HotThemeFooter from "./main/HotThemeFooter";
// style
import "./style.scss";

/**
 * HotTheme - description hot theme component
 */

const HotTheme = () => {
  return (
    <div className="hot-theme-wrapper">
      <div className="hot-theme-wrapper-inner">
        <HotThemeTitle title="Hot Theme" />
        <HotThemeList />
        <HotThemeFooter title="> Watch more hot theme" />
      </div>
    </div>
  );
};

export default HotTheme;
