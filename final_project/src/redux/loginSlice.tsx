import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
  credentials:{
    username:'',
    password:''
  },
  isLoading:false,
  isError:false
}


export const loginApi=createAsyncThunk('get/loginApi',async()=>{
  const gets=await axios.get('');
  return gets.data;
})


const loginSlice=createSlice({
  name:'login',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(loginApi.pending,(state)=>{
      state.isLoading=true;
    })
    .addCase(loginApi.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.credentials=action.payload
    })
    .addCase(loginApi.rejected,(state)=>{
      state.isError=true;
    })
  }
})

export default loginSlice.reducer;