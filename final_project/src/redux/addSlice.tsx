import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const addApi = createAsyncThunk(
  "get/loginApi",
  async (formdata: FormValues) => {
    const gets = await axios.post(
      "https://apistg.appnovahome.com/Partner/AddPartner",
      { formdata },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(formdata);
    return formdata;
  }
);

const addSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addApi.fulfilled, (state, action) => {
        state.ids = action.payload;
      })
      .addCase(addApi.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default addSlice.reducer;
