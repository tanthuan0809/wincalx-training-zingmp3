// lib import
import React, { useState, useEffect } from "react";
import axios from "axios";

// import conponent
import AlbumHotItem from "../../components/AlbumHotItem";

// import style
import "./style.scss";

/**
 * AlbumHotList - component a list of AlbumHotItem
 */

const AlbumHotList = () => {
  const [albumHots, setAlbumHots] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((res) => setAlbumHots(res.data))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="album-hot-list-wraper">
      <div className="album-hot-list-wraper-inner">
        {albumHots.map((album) => (
          <AlbumHotItem key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
export default AlbumHotList;
