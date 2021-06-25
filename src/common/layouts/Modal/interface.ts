import React from "react";
import { ComponentIE } from "../../interface";

export interface ShowModalActionIE {
  next?: Function;
  type: "SAMPLE" | "MESSAGE";
  children?: React.FC<any>;
  item?: {
    childrenProps?: any;
    style?: any;
    option?: {
      dimClose?: boolean;
      keyClose?: boolean;
    };
  };
}

export interface ModalIE extends ComponentIE {
  children: React.FC<any>;
  childrenProps: any;
  style: any;
  option: {
    dimClose?: boolean;
    keyClose?: boolean;
  };
}
