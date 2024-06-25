import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataarr: [],
};
const token = localStorage.getItem("token");

export const partnerApi = createAsyncThunk("count/countApi", async () => {
  const response = await axios.get(
    "https://apistg.appnovahome.com/Partner/GetPartners",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);
  return response.data.data;
});

const viewSlice = createSlice({
  name: "totalCount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(partnerApi.fulfilled, (state, action) => {
      state.dataarr = action.payload;
    });
  },
});

export default viewSlice.reducer;
