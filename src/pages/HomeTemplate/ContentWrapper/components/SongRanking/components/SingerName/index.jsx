// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SingerName - singer name
 * @param { string } name - name of singer
 */

const SingerName = ({ name }) => {
  return (
    <div className="singer-name-wrapper">
      <div className="name">{name}</div>
    </div>
  );
};

export default SingerName;
