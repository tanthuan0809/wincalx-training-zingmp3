// libs import
import React, { useState } from "react";

// components
import SongRankWeeklyCountry from "../SongRankWeeklyCountry";

// style
import "./style.scss";

// example data
const data = [
  {
    name: "Việt Nam",
    id: 1
  },
  {
    name: "US-UK",
    id: 2
  },
  {
    name: "K-POP",
    id: 3
  }
];

/**
 * SongRankWeeklyCountrySelector - description a country selector
 */

const SongRankWeeklyCountrySelector = () => {
  const [countries] = useState(data);
  return (
    <div className="song-rank-weekly-country-selector-wrapper">
      <div className="song-rank-weekly-country-selector-wrapper-inner">
        {countries.map((country) => (
          <SongRankWeeklyCountry key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default SongRankWeeklyCountrySelector;
