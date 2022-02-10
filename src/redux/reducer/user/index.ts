import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, UserStore } from "../../type";
import { initUserState } from "./default";

export default function themeStore(
  state: UserStore = initUserState,
  action: AnyAction
) {
  switch (action.type) {
    case ActionEnum.SET_USER_INFO:
      return _.merge({}, state, {
        user: action.value,
      });

    default:
      return state;
  }
}
