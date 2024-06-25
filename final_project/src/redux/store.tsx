import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import totalCountSlice from "./totalCountSlice";

const reducers = combineReducers({
  log: loginSlice,
  totalcount: totalCountSlice,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
