import { ActionEnum } from "../../type";

export const themeAction = (value: boolean) => ({
  type: ActionEnum.SET_DARK_MODE,
  value,
});
