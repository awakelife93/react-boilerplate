import { DefaultFC } from "../../../common/components/CommonRender";

export const initGlobalState = {
  isShowAdContainer: false,
  modalItem: {
    isShowModal: false,
    children: DefaultFC,
    childrenProps: {},
    style: {},
    titleItem: {
      title: "",
      subTitle: "",
      titleStyle: {},
      subTitleStyle: {},
    },
    buttonItem: [],
    option: {
      isDimClose: false,
      isKeyClose: true,
    },
  },
};
