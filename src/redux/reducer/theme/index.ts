import _ from "lodash";
import { ActionIE, ThemeStoreIE } from "../../interface";
import { ActionEnum } from "../../type";
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
