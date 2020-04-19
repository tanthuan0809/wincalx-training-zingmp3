// libs import
import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import SongInTop from "../SongInTop";

// style
import "./style.scss";

/**
 * SongInTopList - top song
 */

const SongInTopList = () => {
  const [listSong, setListSong] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos?_limit=5"
    })
      .then((res) => {
        setListSong(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div className="song-in-top-list-wrapper">
      {listSong.map((song) => (
        <SongInTop key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongInTopList;
