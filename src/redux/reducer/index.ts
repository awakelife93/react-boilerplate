import { combineReducers } from "redux";
import contentsStore from "./contents";
import userStore from "./user";

export default combineReducers({ contentsStore, userStore });
