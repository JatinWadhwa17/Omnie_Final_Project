import React from "react";
import ViewAllPartners from "@/components/PartnerDisplay/viewAllPartners";
import Dashboard from "@/components/dashboard/sideNav";
import SearchBar from "@/components/DisplayCard/searchBar";

const page = () => {
  return (
    <div>
      <Dashboard />

      <div style={{ marginLeft: "185px" }}>
        <SearchBar />
        <ViewAllPartners />
      </div>
    </div>
  );
};

export default page;
