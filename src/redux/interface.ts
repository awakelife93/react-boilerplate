export interface ActionIE {
  type: string;
  value: any;
}

export interface ThemeStoreIE {
  isDarkMode: boolean;
}

export interface GlobalStoreIE {
  isShowAdContainer: boolean;
  modalItem: {
    children: any;
    style: any;
    option: any;
  };
}

export interface UserStoreIE {
  user: {
    isLogin: boolean;
    info: {
      email: string;
      nickname: string;
    };
  };
}
