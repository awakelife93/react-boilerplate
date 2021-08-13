import { ActionEnum } from "../../type";
import { initThemeState } from "../../reducer/theme/default";

export const initThemeAction = () => ({
  type: ActionEnum.SET_THEME_MODE,
  value: initThemeState.useTheme,
});

export const setThemeAction = (value: boolean) => ({
  type: ActionEnum.SET_THEME_MODE,
  value,
});
