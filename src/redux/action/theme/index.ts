import { ActionEnum } from "../../type";
import { defaultDarkMode } from "../../../common/const";

export const initDarkModeAction = () => ({
  type: ActionEnum.SET_DARK_MODE,
  value: defaultDarkMode,
});

export const setDarkModeAction = (value: boolean) => ({
  type: ActionEnum.SET_DARK_MODE,
  value,
});
