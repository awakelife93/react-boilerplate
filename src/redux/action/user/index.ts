import { ActionEnum } from "../../type";

export const initUserInfoAction = () => ({
  type: ActionEnum.SET_USER_INFO,
  value: {
    email: "",
    nickname: "",
  },
});

export const setUserInfoAction = (value: boolean) => ({
  type: ActionEnum.SET_USER_INFO,
  value,
});
