import _ from "lodash";
import { CSSProperties } from "styled-components";
import { RoutePath } from "../../route/routes";
import {
  LayoutContainerIE,
  BodyContainerIE,
  BottomContainerIE,
  HeaderContainerIE,
} from "../components/Container";

import CommonColor from "./color";
import CommonTheme from "./theme";
import CommonImage from "./image";
import { ComponentStyleIE } from "../interface";

// todo:
// Style Server에서 아직 관리 클라이언트가 없기 때문에 Sample 데이터 기준으로 로직을 짜야함.
// 즉흥적인 아이디어라 좀 더 구체적인 가이드 및 설계가 필요
interface ThemeItemIE {
  [index: string]: any;
}
const generateThemeStyle = ({ item }: { item: any[] }) => {
  let ThemeItem: ThemeItemIE = {};

  for (let i = 0; i < item.length; i++) {
    const theme = item[i];
    if (theme.isActive === false || theme.isDeleted === true) break;

    const style = theme.styles;
    const layout = style.layout;
    const component = style.component;

    ThemeItem[style.name] = {
      LAYOUT: layout.attribute,
      COMPONENT: component.attribute,
    };
  }

  return ThemeItem;
};

const setMockUpStyleData = ({
  type,
  isDarkMode,
}: {
  type: "LAYOUT" | "MODAL" | "COMPONENT";
  isDarkMode: boolean;
}) => {
  switch (type) {
    case "LAYOUT":
      if (isDarkMode === true) {
        return { ...CommonTheme.BLACK_THEME.LAYOUT } as CSSProperties;
      } else {
        return { ...CommonTheme.WHITE_THEME.LAYOUT } as CSSProperties;
      }
    case "MODAL":
      if (isDarkMode === true) {
        return { ...CommonTheme.BLACK_THEME.MODAL_LAYOUT } as CSSProperties;
      } else {
        return { ...CommonTheme.WHITE_THEME.MODAL_LAYOUT } as CSSProperties;
      }
    case "COMPONENT":
      if (isDarkMode === true) {
        return { ...CommonTheme.BLACK_THEME.COMPONENT } as ComponentStyleIE;
      } else {
        return { ...CommonTheme.WHITE_THEME.COMPONENT } as ComponentStyleIE;
      }
  }
};

const generateLayoutContainerStyle = ({
  themeItem,
  path = "",
  isDarkMode = false,
}: {
  themeItem: any;
  path: string;
  isDarkMode: boolean;
}) => {
  let props: LayoutContainerIE = {};

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      isDarkMode,
    }) as CSSProperties;
  } else {
    props["style"] =
      isDarkMode === true
        ? ({
            ...themeItem.BLACK_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties);
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...props["style"],
  };
};

const generateModalContainerStyle = ({
  themeItem,
  isDarkMode = false,
}: {
  themeItem: any;
  isDarkMode: boolean;
}) => {
  let props: LayoutContainerIE = {};

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "MODAL",
      isDarkMode,
    }) as CSSProperties;
  } else {
    props["style"] =
      isDarkMode === true
        ? ({
            ...themeItem.BLACK_THEME.LAYOUT.MODAL_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME.LAYOUT.MODAL_LAYOUT,
          } as CSSProperties);
  }

  return {
    ...props["style"],
  };
};

const generateHeaderContainerStyle = ({
  themeItem,
  path = "",
  isDarkMode = false,
}: {
  themeItem: any;
  path: string;
  isDarkMode: boolean;
}) => {
  let props: HeaderContainerIE = {};

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      isDarkMode,
    }) as CSSProperties;
  } else {
    props["style"] =
      isDarkMode === true
        ? ({
            ...themeItem.BLACK_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties);
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...props["style"],
  };
};

const generateBodyContainerStyle = ({
  themeItem,
  path = "",
  isDarkMode = false,
}: {
  themeItem: any;
  path: string;
  isDarkMode: boolean;
}) => {
  let props: BodyContainerIE = {};

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      isDarkMode,
    }) as CSSProperties;
  } else {
    props["style"] =
      isDarkMode === true
        ? ({
            ...themeItem.BLACK_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties);
  }

  switch (path) {
    case RoutePath.CONTENTS:
      props["style"].padding = 20;
      break;
    case RoutePath.SIGN_UP:
    case RoutePath.SIGN_IN:
      props["style"].padding = 120;
      break;
  }

  return {
    ...props["style"],
  };
};

const generateBottomContainerStyle = ({
  themeItem,
  path = "",
  isDarkMode = false,
}: {
  themeItem: any;
  path: string;
  isDarkMode: boolean;
}) => {
  let props: BottomContainerIE = {};

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      isDarkMode,
    }) as CSSProperties;
  } else {
    props["style"] =
      isDarkMode === true
        ? ({
            ...themeItem.BLACK_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties);
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...props["style"],
  };
};

const generateComponentStyle = ({
  themeItem,
  path = "",
  isDarkMode = false,
}: {
  themeItem: any;
  path: string;
  isDarkMode: boolean;
}) => {
  let style: ComponentStyleIE;

  if (_.isEmpty(themeItem)) {
    style = setMockUpStyleData({
      type: "COMPONENT",
      isDarkMode,
    }) as ComponentStyleIE;
  } else {
    style =
      isDarkMode === true
        ? ({
            ...themeItem.BLACK_THEME.COMPONENT,
          } as ComponentStyleIE)
        : ({
            ...themeItem.WHITE_THEME.COMPONENT,
          } as ComponentStyleIE);
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...style,
  };
};

const showBottomContainer = (route: string): boolean => {
  switch (route) {
    case RoutePath.SIGN_IN:
    case RoutePath.CONTENTS_DETAIL:
      return false;
    default:
      return true;
  }
};

const showHeaderContainer = (route: string): boolean => {
  switch (route) {
    default:
      return true;
  }
};

export {
  CommonColor,
  CommonTheme,
  CommonImage,
  generateThemeStyle,
  generateLayoutContainerStyle,
  generateModalContainerStyle,
  generateHeaderContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
};
