import { ThemeItem } from "../../../../common/type";
import { initThemeState } from "../../reducer/theme/default";
import { ActionEnum } from "../../../type";

export const initThemeAction = () => ({
  type: ActionEnum.SET_THEME_MODE,
  value: initThemeState.useTheme,
});

export const setThemeAction = (value: boolean) => ({
  type: ActionEnum.SET_THEME_MODE,
  value,
});

export const setThemeItemAction = (value: ThemeItem) => ({
  type: ActionEnum.SET_THEME_ITEM,
  value,
});
