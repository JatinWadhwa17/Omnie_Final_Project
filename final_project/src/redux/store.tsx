import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

const reducers=combineReducers({
  log:loginSlice
})

const store=configureStore({
  reducer:reducers,
})

export default store;