import { ActionEnum, ThemeStoreType } from "@/redux/type";
import _ from "lodash";
import { AnyAction } from "redux";
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
    case ActionEnum.SET_THEME_ITEM:
      return _.merge({}, state, {
        themeItem: action.value,
      });
    default:
      return state;
  }
};

export default themeStore;
