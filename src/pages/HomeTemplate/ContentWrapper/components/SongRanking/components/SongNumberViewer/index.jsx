// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongNumberViewer - number viewer
 * @param { string } viewerNumber - number view
 */

const SongNumberViewer = ({ viewerNumber }) => {
  return (
    <div className="song-number-viewer-wrapper">
      <div className="number">{viewerNumber}</div>
    </div>
  );
};

export default SongNumberViewer;
