// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import HotSingerItem from "../HotSingerItem";

// style
import "./style.scss";

/**
 * HotSingerList - description a list of hot singer
 */

const HotSingerList = () => {
  const [singerList, setSingerList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        let data = [...res.data];
        data = data.splice(2);
        setSingerList(data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="hot-singer-list-wrapper">
      <div className="hot-singer-list-wrapper-inner">
        {singerList.map((singer) => (
          <HotSingerItem key={singer.id} singer={singer} />
        ))}
      </div>
    </div>
  );
};

export default HotSingerList;
