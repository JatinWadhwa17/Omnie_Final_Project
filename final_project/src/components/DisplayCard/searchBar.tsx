"use client";
import PersistentDrawerRight from "../form/addForm";
import { useState } from "react";

const SearchBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addform = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <div className="wrapper">
      <button className="button add-button" onClick={addform}>
        Add Data
      </button>
      <div className="search-container">
        <input type="text" className="input" placeholder="Enter the name" />
        <button className="button search-button">Search</button>
      </div>
      <PersistentDrawerRight
        open={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </div>
  );
};

export default SearchBar;
