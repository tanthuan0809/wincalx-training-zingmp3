// libs import
import React, { useState } from "react";

// components
import TopMVRank from "../TopMVRank";

// style
import "./style.scss";

/**
 * ListMVRank - list mv rank
 */

const ListMVRank = () => {
  const [listMV] = useState(Array.from(Array(5)));
  return (
    <div className="list-mv-rank-wrapper">
      {listMV.map((mv, top) => (
        <TopMVRank top={top} mv={mv} />
      ))}
    </div>
  );
};

export default ListMVRank;
