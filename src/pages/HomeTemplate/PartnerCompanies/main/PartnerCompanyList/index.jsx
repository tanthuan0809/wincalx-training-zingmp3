// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import PartnerComanyItem from "../../components/PartnerCompanyItem";

// style
import "./style.scss";

/**
 * PartnerCompanyList - description a list of partner company
 */

const PartnerCompanyList = () => {
  const [comapnyList, setCompanyList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        const data = [...res.data];
        setCompanyList(data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="partner-company-list-wrapper">
      <div className="partner-company-list-wrapper-inner">
        {comapnyList.map((company) => (
          <PartnerComanyItem company={company} />
        ))}
      </div>
    </div>
  );
};

export default PartnerCompanyList;
