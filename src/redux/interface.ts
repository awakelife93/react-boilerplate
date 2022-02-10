import { ReduxStore } from "./type";

export interface ReduxIE extends ReduxStore {
  initContentsAction: Function;
  getContentsAction: Function;
  initThemeAction: Function;
  setThemeAction: Function;
  initShowAdAction: Function;
  showAdAction: Function;
  initShowModalAction: Function;
  showModalAction: Function;
  setUserInfoAction: Function;
  initUserInfoAction: Function;
}
