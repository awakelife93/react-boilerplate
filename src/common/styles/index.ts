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

/**
 *
 * @description
 * 페이지를 이루는 3개의 영역을 동적으로 스타일을 제작한다.
 */

const generateLayoutContainerStyle = ({ path = "" }: { path: string }) => {
  let props: LayoutContainerIE = {};

  switch (path) {
    // todo: 필요 시 작성
    case RoutePath.SIGN_UP:
    case RoutePath.SIGN_IN: {
      props["style"] = { position: "absolute" };
    }
  }

  return {
    ...props["style"],
  };
};

const generateModalContainerStyle = ({
  isDarkMode = false,
}: {
  isDarkMode: boolean;
}) => {
  let props: LayoutContainerIE = {};

  if (isDarkMode === true) {
    props["style"] = { ...CommonTheme.BLACK_THEME.MODAL_LAYOUT };
  } else {
    props["style"] = { ...CommonTheme.WHITE_THEME.MODAL_LAYOUT };
  }

  return {
    ...props["style"],
  };
};

const generateCommonContainerStyle = ({
  isDarkMode = false,
}: {
  isDarkMode: boolean;
}) => {
  let props: LayoutContainerIE = {};

  if (isDarkMode === true) {
    props["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    props["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
  }

  return {
    ...props["style"],
  };
};

const generateHeaderContainerStyle = ({
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let props: HeaderContainerIE = {};

  if (isDarkMode === true) {
    props["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    props["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
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
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let props: BodyContainerIE = {};

  if (isDarkMode === true) {
    props["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    props["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
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
  path = "",
  isDarkMode = false,
}: {
  path: string;
  isDarkMode: boolean;
}) => {
  let props: BottomContainerIE = {};

  if (isDarkMode === true) {
    props["style"] = { ...CommonTheme.BLACK_THEME.LAYOUT };
  } else {
    props["style"] = { ...CommonTheme.WHITE_THEME.LAYOUT };
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
    case RoutePath.SIGN_IN:
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
  generateLayoutContainerStyle,
  generateModalContainerStyle,
  generateCommonContainerStyle,
  generateHeaderContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
};
