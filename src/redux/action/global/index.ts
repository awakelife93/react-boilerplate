import { ActionEnum } from "../../type";
import {
  defaultShowAdContainer,
  defaultShowModal,
} from "../../../common/const";

export const initShowAdAction = () => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value: defaultShowAdContainer,
});

export const initShowModalAction = () => ({
  type: ActionEnum.SET_MODAL,
  value: {
    isShowModal: defaultShowModal,
    children: "",
    style: {},
  },
});

export const showAdAction = (value: boolean) => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value,
});

export const showModalAction = (value: any) => ({
  type: ActionEnum.SET_MODAL,
  value,
});
