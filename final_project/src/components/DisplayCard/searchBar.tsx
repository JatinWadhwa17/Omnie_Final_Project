"use client";
import PersistentDrawerRight from "../form/addForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { afterSearch, isSearching } from "@/redux/searchSlice";

const SearchBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchData, setsearchData] = useState("");
  const [searching, setSearching] = useState(false);
  const addform = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const response = useSelector(
    (state: RootState) => state.partners.dataarr as PartnerData[]
  );

  const handleChange = (inputData: string) => {
    setsearchData(inputData);
  };

  const handleSearch = () => {
    const searchingData = response.filter((data) =>
      data.companyName.toLowerCase().includes(searchData.toLowerCase())
    );
    setSearching(true);
    dispatch(isSearching(searching));
    dispatch(afterSearch(searchingData));
  };
  const handleCancelSearch = () => {
    setsearchData("");
    dispatch(isSearching(false));
  };

  return (
    <div className="wrapper">
      <button className="button add-button" onClick={addform}>
        Add Data
      </button>
      <div className="search-container">
        <input
          type="text"
          className="input"
          placeholder="Enter the name"
          value={searchData}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="button search-button" onClick={handleSearch}>
          Search
        </button>
        <button className="button search-button" onClick={handleCancelSearch}>
          View All
        </button>
      </div>
      <PersistentDrawerRight
        open={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </div>
  );
};

export default SearchBar;
