import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, DarkModeIE } from "../../interface";
import { initDarkModeState } from "./default";

export default function contentsStore(
  state: DarkModeIE = initDarkModeState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.SET_DARK_MODE:
      return Object.assign([], state, {
        isDarkMode: action.value,
      });

    default:
      return state;
  }
}
