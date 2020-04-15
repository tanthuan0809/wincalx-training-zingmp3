// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongRankWeeklyCountry - description a country name
 * @param { string } country // country name
 */

const SongRankWeeklyCountry = ({ country }) => {
  return <div className="song-rank-weekly-country-wrapper">{country.name}</div>;
};

export default SongRankWeeklyCountry;
