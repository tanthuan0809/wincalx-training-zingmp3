// libs import
import React from "react";

// components
import HotestSinger from "../../components/HotestSinger";
import HotSingerList from "../../components/HotSingerList";

// style
import "./style.scss";

/**
 * HotSingerMain - description the body of hot song component
 */

const HotSingerMain = () => {
  return (
    <div className="hot-singer-main-wrapper">
      <div className="hot-singer-main-wrapper-inner">
        <HotestSinger src="https://via.placeholder.com/200/92c952" />
        <HotSingerList />
      </div>
    </div>
  );
};

export default HotSingerMain;
