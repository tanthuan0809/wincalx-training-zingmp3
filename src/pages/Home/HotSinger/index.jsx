// libs import
import React from "react";

// components
import HotSingerTitle from "./main/HotSingerTitle";
import HotSingerMain from "./main/HotSingerMain";

// style
import "./style.scss";

/**
 * HotSinger - description hot singer component
 */

const HotSinger = () => {
  return (
    <div className="hot-singer-wrapper">
      <div className="hot-singer-wrapper-inner">
        <HotSingerTitle title="Hot Singer" />
        <HotSingerMain />
      </div>
    </div>
  );
};

export default HotSinger;
