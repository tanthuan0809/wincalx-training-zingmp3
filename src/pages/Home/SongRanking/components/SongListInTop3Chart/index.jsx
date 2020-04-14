// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import SongInTop3Chart from "../SongInTop3Chart";

// style
import "./style.scss";

/**
 * SongListInTop3Chart - Chart line top
 */

const SongListInTop3Chart = () => {
  const [listSong, setListSong] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos?_limit=3"
    })
      .then((res) => {
        setListSong(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div className="song-list-in-top-3-chart-wrapper">
      {listSong.map((song) => (
        <SongInTop3Chart key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongListInTop3Chart;
