import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, ThemeStoreType } from "../../type";
import { initThemeState } from "./default";

const themeStore = (
  state: ThemeStoreType = initThemeState,
  action: AnyAction
): ThemeStoreType => {
  switch (action.type) {
    case ActionEnum.SET_THEME_MODE:
      return _.merge({}, state, {
        useTheme: action.value,
      });

    default:
      return state;
  }
};

export default themeStore;
