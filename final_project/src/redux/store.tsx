import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

const reducers=combineReducers({
  log:loginSlice
})

const store=configureStore({
  reducer:reducers,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;