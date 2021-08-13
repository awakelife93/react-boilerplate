import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { CSSProperties } from "styled-components";
import { ReduxIE } from "../redux/interface";
import { RouteIE } from "../route/routes";

export interface ThemeItemIE {
  [index: string]: {
    LAYOUT?: any;
    COMPONENT?: any;
  };
}
export interface ComponentStyleIE {
  MENU_BOX: {
    CONTAINER: CSSProperties;
    ITEM: CSSProperties;
  };
  SUB_MIT_BUTTON: CSSProperties;
  TEXT_BUTTON: CSSProperties;
  ICON: CSSProperties;
  COMMON_LABEL: CSSProperties;
  CARD: CSSProperties;
}

export interface LayoutIE extends ReduxIE, RouteComponentProps, RouteIE {}

export interface ComponentIE extends LayoutIE {
  layoutStyles: CSSProperties;
  componentStyles: ComponentStyleIE;
  // 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<any>;
}
