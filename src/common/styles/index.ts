import _ from "lodash";
import { CSSProperties } from "styled-components";
import { RoutePath } from "../../route/routes";
import {
  BodyContainerIE,
  BottomContainerIE,
  HeaderContainerIE,
  LayoutContainerIE
} from "../components/Container";
import { ComponentStyleIE, ThemeItemIE } from "../interface";
import CommonColor from "./color";
import CommonImage from "./image";
import CommonTheme from "./theme";

/**
 * generateThemeStyle
 * @description
 * 컴포넌트, 레이아웃은 각각의 테마별로 지니고 있으며, __을 구분자로 사용한다.
 * @param item
 * @returns {ThemeItemIE}
 */
const generateThemeStyle = ({ item }: { item: any[] }) => {
  const themeItem = {} as ThemeItemIE;

  try {
    for (let i = 0; i < item.length; i++) {
      const theme = item[i];

      if (
        theme.isActive === false ||
        theme.isDeleted === true ||
        _.isEmpty(theme.styles)
      )
        break;

      const style = theme.styles;
      const layouts = style.layout;
      const components = style.component;

      if (_.isEmpty(layouts) || _.isEmpty(components)) break;

      layouts.forEach((layout: any) => {
        const layoutName = layout.name.split("__")[1];

        if (_.isUndefined(themeItem[style.name])) {
          themeItem[style.name] = {
            LAYOUT: {
              [layoutName]: layout.attribute,
            },
          };
        } else {
          themeItem[style.name].LAYOUT = {
            ...themeItem[style.name]?.LAYOUT,
            [layoutName]: layout.attribute,
          };
        }
      });

      components.forEach((component: any) => {
        const componentName = component.name.split("__")[1];

        if (_.isUndefined(themeItem[style.name])) {
          themeItem[style.name] = {
            COMPONENT: {
              [componentName]: component.attribute,
            },
          };
        } else {
          themeItem[style.name].COMPONENT = {
            ...themeItem[style.name]?.COMPONENT,
            [componentName]: component.attribute,
          };
        }
      });
    }

    return themeItem;
  } catch (error: unknown) {
    console.log(error);
    return {};
  }
};

/**
 * setMockUpStyleData
 * @param {"LAYOUT" | "MODAL" | "COMPONENT"} type
 * @param {boolean} useTheme
 * @returns {CSSProperties}
 */
const setMockUpStyleData = ({
  type,
  useTheme,
}: {
  type: "LAYOUT" | "MODAL" | "COMPONENT";
  useTheme: boolean;
}) => {
  switch (type) {
    case "LAYOUT":
      if (useTheme === true) {
        return { ...CommonTheme.BLACK_THEME_STYLE.LAYOUT } as CSSProperties;
      } else {
        return { ...CommonTheme.WHITE_THEME_STYLE.LAYOUT } as CSSProperties;
      }
    case "MODAL":
      if (useTheme === true) {
        return {
          ...CommonTheme.BLACK_THEME_STYLE.MODAL_LAYOUT,
        } as CSSProperties;
      } else {
        return {
          ...CommonTheme.WHITE_THEME_STYLE.MODAL_LAYOUT,
        } as CSSProperties;
      }
    case "COMPONENT":
      if (useTheme === true) {
        return {
          ...CommonTheme.BLACK_THEME_STYLE.COMPONENT,
        } as ComponentStyleIE;
      } else {
        return {
          ...CommonTheme.WHITE_THEME_STYLE.COMPONENT,
        } as ComponentStyleIE;
      }
  }
};

const generateLayoutContainerStyle = ({
  themeItem,
  path = "",
  useTheme = false,
}: {
  themeItem: any;
  path: string;
  useTheme: boolean;
}) => {
  const props = {} as LayoutContainerIE;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] =
      useTheme === true
        ? ({
            ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
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
  useTheme = false,
}: {
  themeItem: any;
  useTheme: boolean;
}) => {
  let props = {} as LayoutContainerIE;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "MODAL",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] =
      useTheme === true
        ? ({
            ...themeItem.BLACK_THEME_STYLE.LAYOUT.MODAL_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME_STYLE.LAYOUT.MODAL_LAYOUT,
          } as CSSProperties);
  }

  return {
    ...props["style"],
  };
};

const generateHeaderContainerStyle = ({
  themeItem,
  path = "",
  useTheme = false,
}: {
  themeItem: any;
  path: string;
  useTheme: boolean;
}) => {
  let props = {} as HeaderContainerIE;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] =
      useTheme === true
        ? ({
            ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
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
  useTheme = false,
}: {
  themeItem: any;
  path: string;
  useTheme: boolean;
}) => {
  let props = {} as BodyContainerIE;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] =
      useTheme === true
        ? ({
            ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
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
  useTheme = false,
}: {
  themeItem: any;
  path: string;
  useTheme: boolean;
}) => {
  let props = {} as BottomContainerIE;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] =
      useTheme === true
        ? ({
            ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
          } as CSSProperties)
        : ({
            ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
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
  useTheme = false,
}: {
  themeItem: any;
  path: string;
  useTheme: boolean;
}) => {
  let style = {} as ComponentStyleIE;

  if (_.isEmpty(themeItem)) {
    style = setMockUpStyleData({
      type: "COMPONENT",
      useTheme,
    }) as ComponentStyleIE;
  } else {
    style =
      useTheme === true
        ? ({
            ...themeItem.BLACK_THEME_STYLE.COMPONENT,
          } as ComponentStyleIE)
        : ({
            ...themeItem.WHITE_THEME_STYLE.COMPONENT,
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
