import { ContentsType } from "@/api/GetAPI/type";
import { ModalItemType } from "@/common/components/Modal/type";
import { ThemeItemType } from "@/common/type";

export type UseReduxType = "reduxLib" | "reduxToolkit";

export type ContentsStoreType = {
  contents: ContentsType[];
};

export type ThemeStoreType = {
  useTheme: boolean;
  themeItem: ThemeItemType;
};

export type GlobalStoreType = {
  isShowAdContainer: boolean;
  modalItem: ModalItemType;
};

export type UserStoreItemType = {
  isLogin: boolean;
  info: {
    userId: number;
    email: string;
    name: string;
  };
};

export type UserStoreType = {
  user: UserStoreItemType;
};

export type StateType = {
  contentsStore: ContentsStoreType;
  themeStore: ThemeStoreType;
  globalStore: GlobalStoreType;
  userStore: UserStoreType;
};

export type ReduxStoreType = {
  reduxStore: StateType;
};

export type ReduxActionProviderType = {
  initThemeAction: VoidFunction;
  setThemeAction: (value: boolean) => void;
  setThemeItemAction: (value: ThemeItemType) => void;
  initShowAdAction: VoidFunction;
  showAdAction: (value: boolean) => void;
  initShowModalAction: VoidFunction;
  showModalAction: (value: ModalItemType) => void;
  setUserInfoAction: (value: UserStoreItemType) => void;
  initUserInfoAction: VoidFunction;
};

/**
 * @description
 * Redux Action Type 정의
 */
export enum ActionEnum {
  SET_USER_INFO = "SET_USER_INFO",
  GET_CONTENTS = "GET_CONTENTS",
  SET_THEME_MODE = "SET_THEME_MODE",
  SET_THEME_ITEM = "SET_THEME_ITEM",
  SET_AD_CONTAINER = "SET_AD_CONTAINER",
  SET_MODAL_ITEM = "SET_MODAL_ITEM",
}
