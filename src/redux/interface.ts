import React from "react";
import { CSSProperties } from "styled-components";
import { ContentsIE } from "../api/GetAPI/interface";
export interface ActionIE {
  type: string;
  value: any;
}
export interface ContentsStoreIE {
  contents: ContentsIE[];
}
export interface ThemeStoreIE {
  useTheme: boolean;
}
export interface GlobalStoreIE {
  isShowAdContainer: boolean;
  modalItem: {
    isShowModal: boolean;
    children: React.FC<any>;
    childrenProps: any;
    style: CSSProperties;
    titleItem: {
      title: string;
      subTitle: string;
      titleStyle: {};
      subTitleStyle: {};
    };
    buttonItem: {
      title: string;
      next: Function;
      containerStyleItems: {
        hoverBackgroundColor?: string;
        defaultBackgroundColor?: string;
        activeBackgroundColor?: string;
      };
    }[];
    option: {
      dimClose: boolean;
      keyClose: boolean;
    };
  };
}
export interface UserStoreIE {
  user: {
    isLogin: boolean;
    info: {
      userId: number;
      userEmail: string;
      userNickname: string;
    };
  };
}
export interface ReduxIE {
  reduxStore: {
    contentsStore: ContentsStoreIE;
    themeStore: ThemeStoreIE;
    globalStore: GlobalStoreIE;
    userStore: UserStoreIE;
  };
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
