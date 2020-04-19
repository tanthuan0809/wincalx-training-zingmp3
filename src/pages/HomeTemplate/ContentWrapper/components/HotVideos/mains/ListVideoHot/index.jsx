// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import VideoHot from "../../components/VideoHot";

// style
import "./style.scss";

/**
 * ListVideoHot - list video hot
 */

const ListVideoHot = () => {
  const [listVideo, setListVideo] = useState(Array.from(Array(12)));

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos?_limit=12"
    })
      .then((res) => {
        setListVideo(res.data);
      })
      .catch((err) => {
        console.warn(err, "oke");
      });
  }, []);

  return (
    <div className="list-video-hot-wrapper">
      {listVideo.map((video) => (
        <VideoHot video={video} />
      ))}
    </div>
  );
};

export default ListVideoHot;
