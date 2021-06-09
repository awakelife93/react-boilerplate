import { ActionEnum } from "../../type";

export const darkModeAction = (value: boolean) => ({
  type: ActionEnum.SET_DARK_MODE,
  value,
});
