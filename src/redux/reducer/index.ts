import { combineReducers } from "redux";
import contentsStore from "./contents";
import userStore from "./user";
import themeStore from "./theme";

export default combineReducers({ contentsStore, userStore, themeStore });
