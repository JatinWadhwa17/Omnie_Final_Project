import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isDeepStrictEqual } from "util";

interface userstate {
  ids: any;
  isLoading: boolean;
  isError: boolean;
}

const initialState: userstate = {
  ids: [],
  isLoading: false,
  isError: false,
};
const token = localStorage.getItem("token");

export const deleteApi = createAsyncThunk("get/loginApi", async (idss) => {
  const gets = await axios.post(
    "https://apistg.appnovahome.com/Partner/DeletePartner",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    idss
  );
  console.log(idss);
  return idss;
});

const deleteSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteApi.fulfilled, (state, action) => {
        state.ids = state.ids.filter((datas) => datas.id !== action.payload);
      })
      .addCase(deleteApi.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default deleteSlice.reducer;
