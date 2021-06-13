export interface ActionIE {
  type: string;
  value: any;
}

export interface ThemeIE {
  isDarkMode: boolean;
}

export interface GlobalIE {
  isShowAdContainer: boolean;
  modalItem: {
    children: any;
    style: any;
    option: any;
  };
}
