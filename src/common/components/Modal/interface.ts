import React from "react";
import { CSSProperties } from "styled-components";
import { ComponentIE } from "../../interface";

export interface ModalIE extends ComponentIE {
  children: React.FC<any>;
  childrenProps: any;
  style: CSSProperties;
  titleItem?: {
    title: string;
    subTitle?: string;
    titleStyle?: CSSProperties;
    subTitleStyle?: CSSProperties;
  };
  buttonItem?: {
    title: string;
    next: Function;
    containerStyleItems?: {
      hoverBackgroundColor?: string;
      defaultBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
  }[];
  option: {
    dimClose?: boolean;
    keyClose?: boolean;
  };
}
