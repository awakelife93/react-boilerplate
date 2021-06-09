import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, ThemeIE } from "../../interface";
import { initDarkModeState } from "./default";

export default function themeStore(
  state: ThemeIE = initDarkModeState,
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
