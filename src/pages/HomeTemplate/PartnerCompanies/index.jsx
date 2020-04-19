// libs import
import React from "react";

// components
import PartnerCompanyTitle from "./main/PartnerCompanyTitle";
import PartnerCompanyList from "./main/PartnerCompanyList";

// style
import "./style.scss";

/**
 * PartnerCompanies - description PartnerCompanies component
 */

const PartnerCompanies = () => {
  return (
    <div className="partner-companies-wrapper">
      <div className="partner-companies-wrapper-inner">
        <PartnerCompanyTitle title="Partner" />
        <PartnerCompanyList />
      </div>
    </div>
  );
};

export default PartnerCompanies;
