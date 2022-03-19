import { UnknownObject } from "@/common/type";
import { CSSProperties } from "styled-components";

type ModalTemplateType = "MESSAGE";

export type ModalItemType = {
  isShowModal?: boolean;
  children: React.FC<any>;
  childrenProps?: {
    message?: string;
  };
  style?: CSSProperties;
  titleItem?: {
    title?: string;
    subTitle?: string;
    titleStyle?: UnknownObject;
    subTitleStyle?: UnknownObject;
  };
  buttonItem?: {
    title?: string;
    next?: Function;
    containerStyleItems: {
      hoverBackgroundColor?: string;
      defaultBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
  }[];
  option: {
    isDimClose?: boolean;
    isKeyClose?: boolean;
  };
};

export type ModalType = {
  modalItem: ModalItemType;
};

export type ShowModalActionType = {
  next: Function;
  type: ModalTemplateType;
  item: ModalItemType;
};
