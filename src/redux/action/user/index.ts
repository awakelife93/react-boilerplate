import { UserInfoIE } from "../../../api/PostAPI/interface";
import { ActionEnum } from "../../type";

export const loginAction = (value: UserInfoIE) => ({
  type: ActionEnum.GET_USER_INFO,
  value,
});
