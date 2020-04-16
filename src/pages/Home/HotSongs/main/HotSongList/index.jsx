// lib import
import React, { useState, useEffect } from "react";
import axios from "axios";

// import conponent
import HotSongItems from "../../components/HotSongItems";

// import style
import "./style.scss";

/**
 * HotSongList - component a list of HotSongItems
 */

const HotSongList = () => {
  const [hotSongs, setHotSongs] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => setHotSongs(res.data))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="hot-songs-list-wraper">
      {hotSongs.map((song) => (
        <HotSongItems key={song.id} song={song} />
      ))}
    </div>
  );
};
export default HotSongList;
