import { ActionEnum } from "../../type";

export const adAction = (value: boolean) => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value,
});
