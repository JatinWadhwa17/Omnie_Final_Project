import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface userstate {
  ids: number | any;
  isLoading: boolean;
  isError: boolean;
}

const initialState: userstate = {
  ids: null,
  isLoading: false,
  isError: false,
};
const token = localStorage.getItem("token");

export const deleteApi = createAsyncThunk(
  "get/loginApi",
  async (id: number) => {
    const gets = await axios.post(
      "https://apistg.appnovahome.com/Partner/DeletePartner",
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(id);
    return id;
  }
);

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
        state.ids = action.payload;
      })
      .addCase(deleteApi.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default deleteSlice.reducer;
