import _ from "lodash";
import { UnknownObject } from "../common/type";

export const scrollTop = (): void => {
  window.scrollTo(0, 0);
};

export const removeBodyScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const revertBodyScroll = (): void => {
  document.body.style.overflow = "";
};

export const validationObject = (object: UnknownObject): boolean => {
  const keys: string[] = Object.keys(object);

  if (_.isEmpty(keys)) return false;

  return keys.every((key: string) => {
    return !_.isUndefined(object[key]) && !_.isEmpty(object[key]);
  });
};
