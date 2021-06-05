import {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
} from "./storage";

const __DEV__ =
  window.location.port === "3000" && window.location.hostname === "localhost";
const endPoint = "http://localhost:3001/";

export {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
  __DEV__,
  endPoint,
};
