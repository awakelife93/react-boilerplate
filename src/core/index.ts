import {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
} from "./storage";

import i18n from "./i18n";
import { FadeIn } from "./animation";
import { Move } from "./animation";

const __DEV__ = window.location.hostname === "localhost";
const endPoint = "http://localhost:3001/";

export {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
  i18n,
  FadeIn,
  Move,
  __DEV__,
  endPoint,
};
