// lib import
import React, { useState, useEffect } from "react";
import axios from "axios";

// import conponent
import MusicNewItem from "./MuiscNewItem";

// import style
import "./style.scss";

/**
 * MusicNewList - component a list of MusicNewItem
 */

const MusicNewList = () => {
  const [musicNews, setMusicNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((res) => setMusicNews(res.data))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="music-new-list-wraper">
      <div className="music-new-list-wraper-inner">
        {musicNews.map((musicNew) => (
          <MusicNewItem key={musicNew.id} musicNew={musicNew} />
        ))}
      </div>
    </div>
  );
};
export default MusicNewList;
