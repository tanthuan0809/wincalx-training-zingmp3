// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * KeywordSocial - Keyword social
 * @param { string } keyword - keyword social
 */

const KeywordSocial = ({ keyword }) => {
  return (
    <div className="keyword-social-wrapper">
      <div className="keyword">{keyword}</div>
    </div>
  );
};

export default KeywordSocial;
