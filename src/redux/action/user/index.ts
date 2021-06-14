import { UserInfoIE } from "../../../api/PostAPI/interface";
import { ActionEnum } from "../../type";

export const signInAction = (value: UserInfoIE) => ({
  type: ActionEnum.GET_USER_INFO,
  value,
});
