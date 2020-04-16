// libs import
import React from "react";

// import components
import MusicNewColection from "./main/MusicNewColection";
import MusicNewTitle from "./main/MusicNewTitle";

// import style
import "./style.scss";

/**
 * MusicNew - MusicNew component
 */

const MusicNew = () => {
  return (
    <div className="music-new-wraper">
      <div className="music-new-wraper-inner">
        <MusicNewTitle title="Music New Hot" />
        <MusicNewColection />
      </div>
    </div>
  );
};

export default MusicNew;
