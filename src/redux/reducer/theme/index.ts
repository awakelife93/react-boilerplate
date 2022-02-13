import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, ThemeStoreType } from "../../type";
import { initThemeState } from "./default";

export default function themeStore(
  state: ThemeStoreType = initThemeState,
  action: AnyAction
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
