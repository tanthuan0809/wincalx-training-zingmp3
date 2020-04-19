// lib import
import React from "react";

// import conponent
import HotNewInfo from "../HotNewInfo";

// import style
import "./style.scss";

/**
 * HotNew - component describe a hot music new
 * @param { string } hotNews // hot music new information
 */

const HotNew = () => {
  return (
    <div className="hot-new-wrapper">
      <div
        className="hot-new-wrapper-inner"
        style={{
          backgroundImage: "url(https://via.placeholder.com/250x150/92c952)"
        }}
      >
        <HotNewInfo hotNewInfo="To day is a good day" />
      </div>
    </div>
  );
};

export default HotNew;
