// libs import
import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import AlbumByKeyword from "../../components/AlbumByKeyword";

// style
import "./style.scss";

/**
 * ListAlbumKeyword - description
 */

const ListAlbumKeyword = () => {
  const [listAlbum, setListAlbum] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos?_limit=8"
    })
      .then((res) => {
        setListAlbum(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <div className="list-album-keyword-wrapper">
      {listAlbum.map((album) => (
        <AlbumByKeyword key={album.id} album={album} />
      ))}
    </div>
  );
};

export default ListAlbumKeyword;
