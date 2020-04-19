// libs import
import React from "react";
import classnames from "classnames";

// components

// style
import "./style.scss";

/**
 * TopNumber - top number
 * @param { number } top - top number
 */

const TopNumber = ({ top }) => {
  const className = classnames({
    [`top-${top}`]: true,
    top: true
  });
  return (
    <div className="top-number-wrapper">
      <div className={className}>{top}</div>
    </div>
  );
};

export default TopNumber;
