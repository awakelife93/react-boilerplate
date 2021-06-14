import {
  defaultDimClose,
  defaultKeyClose,
  defaultShowAdContainer,
  defaultShowModal,
} from "../../../common/const";

export const initGlobalState = {
  isShowAdContainer: defaultShowAdContainer,
  modalItem: {
    isShowModal: defaultShowModal,
    children: "",
    style: {},
    option: {
      dimClose: defaultDimClose,
      keyClose: defaultKeyClose,
    },
  },
};
