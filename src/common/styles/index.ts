import { RoutePath } from "../../route/routes";
import {
  LayoutContainerIE,
  BodyContainerIE,
  BottomContainerIE,
  HeaderContainerIE,
} from "../components/Conatainer";
import CommonColor from "./color";
import CommonTheme from "./theme";

/**
 *
 * @description
 * 페이지를 이루는 3개의 영역을 동적으로 스타일을 제작한다.
 */

const generateLayoutContainerStyle = ({ path = "" }: { path: string }) => {
  let style: LayoutContainerIE = {};

  switch (path) {
    // todo: 필요 시 작성
    case RoutePath.LOGIN: {
      style["position"] = "absolute";
    }
  }

  return {
    style,
  };
};

const generateHeaderContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let style: HeaderContainerIE = {};

  if (isDarkMode === true) {
    style = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    style = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    style,
  };
};

const generateBodyContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let style: BodyContainerIE = {};

  if (isDarkMode === true) {
    style = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    style = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  switch (path) {
    case RoutePath.CONTENTS:
      style.padding = "20px";
      break;
    case RoutePath.LOGIN:
      style.padding = "100px";
      break;
  }

  return {
    style,
  };
};

const generateBottomContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let style: BottomContainerIE = {};

  if (isDarkMode === true) {
    style = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    style = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    style,
  };
};

const generateComponentStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let style = {};

  if (isDarkMode === true) {
    style = { ...CommonTheme.BLACK_THEME.COMPONENT };
  } else {
    style = { ...CommonTheme.WHITE_THEME.COMPONENT };
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    // 원뎁스로 풀어주자... style key 제거
    ...style,
  };
};

const showBottomContainer = (route: string): boolean => {
  switch (route) {
    case RoutePath.LOGIN:
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
  generateLayoutContainerStyle,
  generateHeaderContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
};
