import { CommonColor } from ".";

// 테마용 컬러
export default {
  BLACK_THEME: {
    LAYOUT: {
      "background-color": CommonColor.BLACK,
    },
    COMPONENT: {
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
      CARD: {
        "background-color": CommonColor.BLACK,
        color: CommonColor.WHITE,
      },
    },
  },
  WHITE_THEME: {
    LAYOUT: {
      "background-color": CommonColor.WHITE,
    },
    COMPONENT: {
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
      CARD: {
        "background-color": CommonColor.WHITE,
        color: CommonColor.BLACK,
      },
    },
  },
};
