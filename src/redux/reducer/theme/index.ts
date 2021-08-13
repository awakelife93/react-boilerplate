import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, ThemeStoreIE } from "../../interface";
import { initThemeState } from "./default";

export default function themeStore(
  state: ThemeStoreIE = initThemeState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.SET_THEME_MODE:
      return _.merge({}, state, {
        useTheme: action.value,
      });

    default:
      return state;
  }
}
