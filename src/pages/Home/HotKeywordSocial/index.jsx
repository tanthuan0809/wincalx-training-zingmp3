// libs import
import React from "react";

// components
import KeywordSocial from "./mains/KeywordSocial";
import ListAlbumKeyword from "./mains/ListAlbumByKeyword";

// style
import "./style.scss";

/**
 * HotKeywordSocial - Hot keyword on social
 */

const HotKeywordSocial = () => {
  return (
    <div className="hot-keyword-social-wrapper">
      <div className="hot-keyword-social-wrapper-inner">
        <KeywordSocial keyword="Ở nhà vì sức khoẻ" />
        <ListAlbumKeyword />
      </div>
    </div>
  );
};

export default HotKeywordSocial;
