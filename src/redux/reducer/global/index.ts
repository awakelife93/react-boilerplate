import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, GlobalStore } from "../../type";
import { initGlobalState } from "./default";

export default function globalStore(
  state: GlobalStore = initGlobalState,
  action: AnyAction
) {
  switch (action.type) {
    case ActionEnum.SET_AD_CONTAINER:
      return _.merge({}, state, {
        isShowAdContainer: action.value,
      });

    case ActionEnum.SET_MODAL_ITEM:
      return _.merge({}, state, {
        modalItem: action.value,
      });

    default:
      return state;
  }
}
