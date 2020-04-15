// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * PartnerCompanyTitle - description a title of PartnerCompanies component
 * @param { string } title // tile of PartnerCompanies component
 */

const PartnerCompanyTitle = ({ title }) => {
  return <div className="partner-company-title-wrapper">{title}</div>;
};

export default PartnerCompanyTitle;
