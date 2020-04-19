// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import SongRankColectionItem from "../SongRankColectionItem";

// style
import "./style.scss";

/**
 * SongRankColectionList - description
 */

const SongRankColectionList = () => {
  const [songList, setSongList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        const data = [...res.data];
        data.shift();
        setSongList(data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="song-rank-colection-list-wrapper">
      <div className="song-rank-colection-list-wrapper-inner">
        {songList.map((song) => (
          <SongRankColectionItem key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongRankColectionList;
