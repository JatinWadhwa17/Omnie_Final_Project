"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";

const Page = ({ params }) => {
  const response = useSelector((state: RootState) => state.partners.dataarr);
  console.log(response[params.details]);
  return (
    <div>
      <h1>You got this!</h1>
      <h1>
        {response[params.details].companyName} #{response[params.details].id}
      </h1>

      <h3>Basic Information</h3>
      <p>Company Name: {response[params.details].companyName}</p>
      <p>Company Website: {response[params.details].companyWebsite}</p>
      <p>Ecommerce {response[params.details].ecommerce}</p>
      <p>Address: {response[params.details].hoAddressLine1}</p>
      <p>City: {response[params.details].hoCity}</p>
      <p>State: {response[params.details].hoState}</p>
      <p>zip: {response[params.details].hoZip}</p>
    </div>
  );
};

export default Page;
