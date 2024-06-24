import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface user{
  username:string,
  password:string,
  token?:string|null
}

interface userstate{
  credentials:user|null,
  isLoading:boolean,
  isError:boolean
}
const initialState:userstate={
  credentials:null,
  isLoading:false,
  isError:false
}


export const loginApi=createAsyncThunk('get/loginApi',async(values:user)=>{
  const gets=await axios.post('https://apistg.appnovahome.com/Account/Authenticate',values);
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