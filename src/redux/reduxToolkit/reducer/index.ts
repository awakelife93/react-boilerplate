import { combineReducers } from "@reduxjs/toolkit";
import globalWorker from "./global";
import themeWorker from "./theme";
import userWorker from "./user";

const reducers = combineReducers({
  themeStore: themeWorker.reducer,
  globalStore: globalWorker.reducer,
  userStore: userWorker.reducer,
});

export default reducers;
