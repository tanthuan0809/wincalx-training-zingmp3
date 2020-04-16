// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * TitleHeader - title
 * @param { string } title - title
 */

const TitleHeader = ({ title }) => {
  return (
    <div className="title-header-wrapper">
      <div className="title">{`${title} >`}</div>
    </div>
  );
};

export default TitleHeader;
