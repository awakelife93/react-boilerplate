import { combineReducers } from "redux";
import globalStore from "./global";
import themeStore from "./theme";
import userStore from "./user";

export default combineReducers({
  themeStore,
  globalStore,
  userStore,
});
