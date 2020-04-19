// libs import
import React from "react";

// style
import "./style.scss";

/**
 * PartnerCompanyItem - description an item of partner company list
 * @param { object } company // an object include information about partner company
 */

const PartnerCompanyItem = ({ company }) => {
  return (
    <div className="partner-company-item-wrapper">
      <img src={company.url} alt="" />
    </div>
  );
};

export default PartnerCompanyItem;
