import { ThemeItemType } from "@/common/type";
import { ActionEnum } from "@/redux/type";
import { initThemeState } from "../../reducer/theme/default";

export const initThemeAction = () => ({
  type: ActionEnum.SET_THEME_MODE,
  value: initThemeState.useTheme,
});

export const setThemeAction = (value: boolean) => ({
  type: ActionEnum.SET_THEME_MODE,
  value,
});

export const setThemeItemAction = (value: ThemeItemType) => ({
  type: ActionEnum.SET_THEME_ITEM,
  value,
});
