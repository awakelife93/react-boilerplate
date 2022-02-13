import { CSSProperties } from "styled-components";

type ModalType = "MESSAGE";

export type ShowModalActionType = {
  next?: Function;
  type: ModalType;
  children?: React.FC<any>;
  item?: {
    childrenProps?: any;
    style?: CSSProperties;
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
    option?: {
      dimClose?: boolean;
      keyClose?: boolean;
    };
  };
};
