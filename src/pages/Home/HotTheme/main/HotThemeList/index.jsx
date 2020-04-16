// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import HotThemeItem from "../../components/HotThemeItem";
// style
import "./style.scss";

/**
 * HotThemeList - description a list of theme
 */

const HotThemeList = () => {
  const [themeList, setThemeList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((res) => setThemeList(res.data))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="hot-theme-list-wrapper">
      <div className="hot-theme-list-wrapper-inner">
        {themeList.map((theme) => (
          <HotThemeItem item={theme} />
        ))}
      </div>
    </div>
  );
};

export default HotThemeList;
