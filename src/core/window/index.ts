import _ from "lodash";

export const initWindowObject = (): void => {
  window.reactClient = {
    email: "",
    nickname: "",
  };
};

export const getWindowDataLength = () => {
  return Object.keys(window.reactClient).length ?? 0;
};

export const getWindowData = (key: string): string => {
  return window.reactClient[key] ?? "";
};

export const setWindowData = (item: any): void => {
  const keys = Object.keys(item);
  keys.forEach((key: string) => {
    window.reactClient[key] = item[key];
  });
};

export const removeWindowData = (key: string): void => {
  window.reactClient[key] = "";
};

export const clearWindowData = () => {
  let keys = Object.keys(window.reactClient);

  keys.forEach((key: string) => {
    delete window.reactClient[key];
  });
};
