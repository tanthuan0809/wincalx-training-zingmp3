import React, { useState, useEffect } from "react";
import HotSongsItem from "./HotSongsItem";
import axios from "axios";

const HotSongsList = () => {
  const [hotSongs, setHotSongs] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => setHotSongs(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(hotSongs)
  return (
    <div className="hot-songs-list">
      <h3>Title of list</h3>
      {hotSongs.map((song) => (
        <HotSongsItem key={song.id} src={song.url} />
      ))}
    </div>
  );
};

export default HotSongsList;
