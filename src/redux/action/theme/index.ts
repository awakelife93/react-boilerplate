import { ActionEnum } from "../../type";

export const setDarkModeAction = (value: boolean) => ({
  type: ActionEnum.SET_DARK_MODE,
  value,
});
