import { ActionEnum } from "../../type";
import { ActionIE, GlobalIE } from "../../interface";
import { initGlobalState } from "./default";

export default function globalStore(
  state: GlobalIE = initGlobalState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.SET_AD_CONTAINER:
      return Object.assign([], state, {
        isShowAdContainer: action.value,
      });

    case ActionEnum.SET_MODAL:
      return Object.assign([], state, {
        modal: action.value,
      });
    default:
      return state;
  }
}
