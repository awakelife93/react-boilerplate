import { ThemeItem } from "../../../../common/type";
import themeWorker from "../../reducer/theme";

export const initThemeAction = () => themeWorker.actions.initTheme();

export const setThemeAction = (value: boolean) =>
  themeWorker.actions.setTheme({ useTheme: value });

export const setThemeItemAction = (value: ThemeItem) =>
  themeWorker.actions.setThemeItem({ themeItem: value });
