import {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
} from "./storage";

import { fadeIn } from "./animation";

const __DEV__ = window.location.hostname === "localhost";
const endPoint = "http://localhost:3001/";

export {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
  fadeIn,
  __DEV__,
  endPoint,
};
