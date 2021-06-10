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
  let _style: LayoutContainerIE = {};

  switch (path) {
    // todo: 필요 시 작성
    case RoutePath.LOGIN: {
      _style["style"] = { position: "absolute" };
    }
  }

  return {
    ..._style["style"],
  };
};

const generateCommonContainerStyle = ({
  isDarkMode = false,
}: {
  isDarkMode: boolean;
}) => {
  let _style: HeaderContainerIE = {};

  if (isDarkMode === true) {
    _style["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    _style["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  return {
    ..._style["style"],
  };
};

const generateHeaderContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let _style: HeaderContainerIE = {};

  if (isDarkMode === true) {
    _style["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    _style["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    ..._style["style"],
  };
};

const generateBodyContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let _style: BodyContainerIE = {};

  if (isDarkMode === true) {
    _style["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    _style["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  switch (path) {
    case RoutePath.CONTENTS:
      _style["style"].padding = "20px";
      break;
    case RoutePath.LOGIN:
      _style["style"].padding = "100px";
      break;
  }

  return {
    ..._style["style"],
  };
};

const generateBottomContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let _style: BottomContainerIE = {};

  if (isDarkMode === true) {
    _style["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    _style["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    ..._style["style"],
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
  generateCommonContainerStyle,
  generateHeaderContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
};
