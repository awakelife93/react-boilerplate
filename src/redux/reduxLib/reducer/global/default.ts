import { DefaultFC } from "../../../../common/components/CommonRender";
import { GlobalStoreType } from "../../../type";

export const initGlobalState: GlobalStoreType = {
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
