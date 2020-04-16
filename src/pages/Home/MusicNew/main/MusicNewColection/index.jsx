// libs import
import React from "react";

// import components
import HotNew from "../../component/HotNew";
import MusicNewList from "../../component/MuiscNewList";

// import style
import "./sytle.scss";

/**
 * MusicNewColection - MusicNewColection component
 */

const MusicNewColection = () => {
  return (
    <div className="music-new-colection-wraper">
      <div className="music-new-colection-wraper-inner">
        <HotNew title="Album Hot" />
        <MusicNewList />
      </div>
    </div>
  );
};

export default MusicNewColection;
