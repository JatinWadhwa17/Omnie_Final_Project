"use client";
import React from "react";
import Dashboard from "@/components/dashboard/sideNav";
import FillerContent from "@/components/DisplayCard/display";
import { useRouter } from "next/navigation";

const Yo = () => {
  const router = useRouter();
  if (localStorage.getItem("token")) {
    return (
      <div>
        <Dashboard />
        <div style={{ marginLeft: "185px" }}>
          <h1>sahdnkjwhdhw</h1>
        </div>
        <div
          style={{
            marginLeft: "185px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <FillerContent />
          <FillerContent />
          <FillerContent />
          <FillerContent />
        </div>
      </div>
    );
  } else {
    router.push("/");
  }
};

export default Yo;
