import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE } from "../../interface";
import { UserInfoIE } from "../../../api/PostAPI/interface";
import { initUserState } from "./default";

export default function userStore(
  state: UserInfoIE = initUserState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.GET_USER_INFO:
      return Object.assign({}, state, action.value);

    default:
      return state;
  }
}
