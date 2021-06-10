import {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
} from "./storage";

import { FadeIn } from "./animation";
import { Move } from "./animation";

const __DEV__ = window.location.hostname === "localhost";
const endPoint = "http://localhost:3001/";

export {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
  FadeIn,
  Move,
  __DEV__,
  endPoint,
};
