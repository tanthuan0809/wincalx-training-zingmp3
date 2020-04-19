// libs import
import React from "react";

// style
import "./style.scss";

/**
 * HostestSinger - description the hotest singer
 * @param { string } src //source of hotest singer image
 */

const HostestSinger = ({ src }) => {
  return (
    <div className="hotest-singer-wrapper">
      <img src={src} alt="" />
    </div>
  );
};

export default HostestSinger;
