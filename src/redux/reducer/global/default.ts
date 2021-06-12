import {
  defaultShowAdContainer,
  defaultShowModal,
} from "../../../common/const";

export const initGlobalState = {
  isShowAdContainer: defaultShowAdContainer,
  modal: {
    isShowModal: defaultShowModal,
    children: "",
    style: {},
  },
};
