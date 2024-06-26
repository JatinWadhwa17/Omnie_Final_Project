import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import totalCountSlice from "./totalCountSlice";
import viewallSlice from "./viewallSlice";
import deleteSlice from "./deleteSlice";
import addSlice from "./addSlice";
import searchSlice from "./searchSlice";

const reducers = combineReducers({
  log: loginSlice,
  totalcount: totalCountSlice,
  partners: viewallSlice,
  delpartner: deleteSlice,
  addpartner: addSlice,
  searchpartner: searchSlice,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
