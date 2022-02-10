import { StateType } from "./type";

export interface ReduxStoreIE {
  reduxStore: StateType;
}
export interface ReduxIE extends ReduxStoreIE {
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
