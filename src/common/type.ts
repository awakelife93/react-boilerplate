import { CSSProperties } from "styled-components";

export type UnknownObject<T = unknown> = Record<string, T>;

export type ComponentStyleType = {
  MENU_BOX: {
    CONTAINER: CSSProperties;
    ITEM: CSSProperties;
  };
  SUB_MIT_BUTTON: CSSProperties;
  TEXT_BUTTON: CSSProperties;
  ICON: CSSProperties;
  COMMON_LABEL: CSSProperties;
  CARD: CSSProperties;
};

export type ThemeItem = {
  [index: string]: {
    LAYOUT?: any;
    COMPONENT?: any;
  };
};
