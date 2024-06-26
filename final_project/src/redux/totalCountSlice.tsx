import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  totalcount: null,
  isLoading: false,
  isError: false,
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
    builder
      .addCase(countApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(countApi.fulfilled, (state, action) => {
        state.totalcount = action.payload;
        state.isLoading = false;
      })
      .addCase(countApi.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default CountSlice.reducer;
