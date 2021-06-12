import { ActionEnum } from "../../type";

export const showAdAction = (value: boolean) => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value,
});

export const showModalAction = (value: any) => ({
  type: ActionEnum.SET_MODAL,
  value,
});
