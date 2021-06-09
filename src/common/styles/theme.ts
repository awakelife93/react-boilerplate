import { CommonColor } from ".";

export default {
  // 테마용 컬러
  BLACK_THEME: {
    LAYOUT: {
      "background-color": CommonColor.BLACK,
    },
    COMPONENT: {
      // 안에 컨텐츠들을 여기다가 정의하면 될듯.
      SUB_MIT_BUTTON: {
        "background-color": CommonColor.BLACK,
        color: CommonColor.WHITE,
        border: `solid 1px ${CommonColor.WHITE}`,
      },
      TEXT_BUTTON: {
        "background-color": CommonColor.BLACK,
        color: CommonColor.WHITE,
      },
      ICON: {
        color: CommonColor.WHITE,
      },
      COMMON_LABEL: {
        color: CommonColor.WHITE,
      },
    },
  },
  WHITE_THEME: {
    LAYOUT: {
      "background-color": CommonColor.WHITE,
    },
    COMPONENT: {
      // 안에 컨텐츠들을 여기다가 정의하면 될듯.
      SUB_MIT_BUTTON: {
        "background-color": CommonColor.WHITE,
        color: CommonColor.BLACK,
        border: `solid 1px ${CommonColor.BLACK}`,
      },
      TEXT_BUTTON: {
        "background-color": CommonColor.WHITE,
        color: CommonColor.BLACK,
      },
      ICON: {
        color: CommonColor.BLACK,
      },
      COMMON_LABEL: {
        color: CommonColor.BLACK,
      },
    },
  },
};
