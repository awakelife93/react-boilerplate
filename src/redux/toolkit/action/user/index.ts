import { UserStoreItemType } from "@/redux/type";
import userWorker from "../../reducer/user";

export const initUserInfoAction = () => userWorker.actions.initUserInfo();

export const setUserInfoAction = (value: UserStoreItemType) =>
  userWorker.actions.setUserInfo({ user: value });
