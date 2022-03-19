import _ from "lodash";
import { CSSProperties } from "styled-components";
import { RoutePath } from "../../route/routes";
import {
  IBodyContainer,
  IBottomContainer,
  IHeaderContainer,
  ILayoutContainer,
} from "../components/Container";
import { ComponentStyleType, ThemeItemType } from "../type";
import CommonColor from "./color";
import CommonImage from "./image";
import CommonTheme from "./theme";

/**
 * generateThemeStyle
 * @description
 * 컴포넌트, 레이아웃은 각각의 테마별로 지니고 있으며, __을 구분자로 사용한다.
 * @param item
 * @returns {ThemeItemType}
 */
const generateThemeStyle = ({ item }: { item: any[] }) => {
  const themeItem = {} as ThemeItemType;

  if (!_.isEmpty(item)) {
    for (let i = 0; i < item.length; i++) {
      const theme = item[i];

      if (!theme.isActive || theme.isDeleted || _.isEmpty(theme.styles)) break;

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
  }

  return themeItem;
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
      if (useTheme) {
        return { ...CommonTheme.BLACK_THEME_STYLE.LAYOUT } as CSSProperties;
      } else {
        return { ...CommonTheme.WHITE_THEME_STYLE.LAYOUT } as CSSProperties;
      }
    case "MODAL":
      if (useTheme) {
        return {
          ...CommonTheme.BLACK_THEME_STYLE.MODAL_LAYOUT,
        } as CSSProperties;
      } else {
        return {
          ...CommonTheme.WHITE_THEME_STYLE.MODAL_LAYOUT,
        } as CSSProperties;
      }
    case "COMPONENT":
      if (useTheme) {
        return {
          ...CommonTheme.BLACK_THEME_STYLE.COMPONENT,
        } as ComponentStyleType;
      } else {
        return {
          ...CommonTheme.WHITE_THEME_STYLE.COMPONENT,
        } as ComponentStyleType;
      }
  }
};

const generateLayoutContainerStyle = ({
  themeItem,
  pathname,
  useTheme = false,
}: {
  themeItem: ThemeItemType;
  pathname: string;
  useTheme: boolean;
}) => {
  const props = {} as ILayoutContainer;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] = useTheme
      ? ({
          ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties)
      : ({
          ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties);
  }

  switch (
    pathname
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
  themeItem: ThemeItemType;
  useTheme: boolean;
}) => {
  let props = {} as ILayoutContainer;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "MODAL",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] = useTheme
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
  pathname,
  useTheme = false,
}: {
  themeItem: ThemeItemType;
  pathname: string;
  useTheme: boolean;
}) => {
  let props = {} as IHeaderContainer;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] = useTheme
      ? ({
          ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties)
      : ({
          ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties);
  }

  switch (
    pathname
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...props["style"],
  };
};

const generateBodyContainerStyle = ({
  themeItem,
  pathname,
  useTheme = false,
}: {
  themeItem: ThemeItemType;
  pathname: string;
  useTheme: boolean;
}) => {
  let props = {} as IBodyContainer;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] = useTheme
      ? ({
          ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties)
      : ({
          ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties);
  }

  switch (pathname) {
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
  pathname,
  useTheme = false,
}: {
  themeItem: ThemeItemType;
  pathname: string;
  useTheme: boolean;
}) => {
  let props = {} as IBottomContainer;

  if (_.isEmpty(themeItem)) {
    props["style"] = setMockUpStyleData({
      type: "LAYOUT",
      useTheme,
    }) as CSSProperties;
  } else {
    props["style"] = useTheme
      ? ({
          ...themeItem.BLACK_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties)
      : ({
          ...themeItem.WHITE_THEME_STYLE.LAYOUT.CONTAINER_LAYOUT,
        } as CSSProperties);
  }

  switch (
    pathname
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...props["style"],
  };
};

const generateComponentStyle = ({
  themeItem,
  pathname,
  useTheme = false,
}: {
  themeItem: ThemeItemType;
  pathname: string;
  useTheme: boolean;
}) => {
  let style = {} as ComponentStyleType;

  if (_.isEmpty(themeItem)) {
    style = setMockUpStyleData({
      type: "COMPONENT",
      useTheme,
    }) as ComponentStyleType;
  } else {
    style = useTheme
      ? ({
          ...themeItem.BLACK_THEME_STYLE.COMPONENT,
        } as ComponentStyleType)
      : ({
          ...themeItem.WHITE_THEME_STYLE.COMPONENT,
        } as ComponentStyleType);
  }

  switch (
    pathname
    // todo: 필요 시 작성
  ) {
  }

  return {
    ...style,
  };
};

const showBottomContainer = (pathname: string): boolean => {
  switch (pathname) {
    case RoutePath.SIGN_IN:
    case RoutePath.CONTENTS_DETAIL:
      return false;
    default:
      return true;
  }
};

const showHeaderContainer = (pathname: string): boolean => {
  switch (pathname) {
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
