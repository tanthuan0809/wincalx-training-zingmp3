// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * ThumbnailTop3Chart - Image in top 3 chart
 * @param {string} thumbnail - link url thumbnail
 */

const ThumbnailTop3Chart = ({ thumbnail }) => {
  return (
    <div className="thumbnail-top-3-chart-wrapper">
      <img src={thumbnail} alt="img" />
    </div>
  );
};

export default ThumbnailTop3Chart;
