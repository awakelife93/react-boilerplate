import { _showModalAction } from "../../common/layouts/Modal";
import { ShowModalActionIE } from "../../common/layouts/Modal/interface";

export const initWindowFunc = ({
  initUserInfoAction,
  showModalAction,
}: {
  initUserInfoAction: Function;
  showModalAction: Function;
}): void => {
  window.globalFunc = {
    initUserInfoAction: () => initUserInfoAction(),
    showModalAction: ({ type, item }: ShowModalActionIE) =>
      _showModalAction({
        next: showModalAction,
        type,
        item: {
          childrenProps: item?.childrenProps,
          style: {
            width: 500,
            height: 120,
            borderRadius: 25,
            padding: 20,
            ...item?.style,
          },
          option: {
            dimClose: true,
            keyClose: true,
            ...item?.option,
          },
        },
      }),
  };
};

export const initWindowObject = (): void => {
  window.globalEntity = {
    email: "",
    nickname: "",
  };
};

export const getWindowDataLength = (): number => {
  return Object.keys(window.globalEntity).length ?? 0;
};

export const getWindowData = (key: string): string => {
  return window.globalEntity[key] ?? "";
};

export const setWindowData = (item: any): void => {
  const keys = Object.keys(item);
  keys.forEach((key: string) => {
    window.globalEntity[key] = item[key];
  });
};

export const removeWindowData = (key: string): void => {
  window.globalEntity[key] = "";
};

export const clearWindowData = () => {
  let keys = Object.keys(window.globalEntity);

  keys.forEach((key: string) => {
    delete window.globalEntity[key];
  });
};