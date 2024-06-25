import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  totalcount: null,
};
const token = localStorage.getItem("token");

export const countApi = createAsyncThunk("count/countApi", async () => {
  const response = await axios.get(
    "https://apistg.appnovahome.com/Partner/GetPartnerCount?Status=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data[0].totalPartners;
});

const CountSlice = createSlice({
  name: "totalCount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(countApi.fulfilled, (state, action) => {
      state.totalcount = action.payload;
    });
  },
});

export default CountSlice.reducer;
