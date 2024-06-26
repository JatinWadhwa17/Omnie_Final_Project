"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import EditIcon from "@mui/icons-material/Edit";
import "../../../styles/style.css";

const Page: React.FC<PageProps> = ({ params }) => {
  const response = useSelector(
    (state: RootState) => state.partners.dataarr as Partner[]
  );
  const index = parseInt(params.details[1]);
  const partner = response[index];
  return (
    <div className="container">
      <h1 className="header">You got this!</h1>
      <h1 className="header">
        {partner.companyName} #{partner.id}
      </h1>

      <EditIcon />
      <div className="leftColumn">
        <h3 className="subheader">Basic Information</h3>
        <p className="info">Company Name: {partner.companyName}</p>
        <p className="info">Company Website: {partner.companyWebsite}</p>
        <p className="info">Ecommerce: {partner.ecommerce ? "Yes" : "No"}</p>
      </div>
      <div className="rightColumn">
        <h3 className="subheader">HO Address / Contact Information</h3>
        <p className="info">Address: {partner.hoAddressLine1}</p>
        <p className="info">City: {partner.hoCity}</p>
        <p className="info">State: {partner.hoState}</p>
        <p className="info">zip: {partner.hoZip}</p>
      </div>
    </div>
  );
};

export default Page;
