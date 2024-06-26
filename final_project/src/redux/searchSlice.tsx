import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataarr: [],
  searching: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    afterSearch: (state, action) => {
      state.dataarr = action.payload;
    },
    isSearching: (state, action) => {
      state.searching = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { afterSearch, isSearching } = searchSlice.actions;
