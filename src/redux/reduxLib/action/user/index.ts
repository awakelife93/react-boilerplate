import { ActionEnum, UserStoreItemType } from "@/redux/type";
import { initUserState } from "../../reducer/user/default";

export const initUserInfoAction = () => ({
  type: ActionEnum.SET_USER_INFO,
  value: initUserState.user,
});

export const setUserInfoAction = (value: UserStoreItemType) => ({
  type: ActionEnum.SET_USER_INFO,
  value,
});
