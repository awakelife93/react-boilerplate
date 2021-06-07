import { RoutePath } from "../../route/routes";
import {
  BodyContainerIE,
  BottomContainerIE,
  HeaderContainerIE,
} from "../components/Conatainer";
import { CommonColor } from "./color";

const generateHeaderContainerStyle = (path: string = "") => {
  let style: HeaderContainerIE = {};

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    style,
  };
};

const generateBodyContainerStyle = (path: string = "") => {
  let style: BodyContainerIE = {};

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

const generateBottomContainerStyle = (path: string = "") => {
  let style: BottomContainerIE = {};

  switch (
    path
    // todo: 필요 시 작성
  ) {
  }

  return {
    style,
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
  generateHeaderContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  showBottomContainer,
  showHeaderContainer,
};
