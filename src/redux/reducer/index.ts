import { combineReducers } from "redux";
import contentsStore from "./contents";
import userStore from "./user";
import themeStore from "./theme";
import globalStore from "./global";

export default combineReducers({
  contentsStore,
  userStore,
  themeStore,
  globalStore,
});
