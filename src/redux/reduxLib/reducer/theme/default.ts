import { getLocalStorageItem } from "../../../../core";
import { ThemeStoreType } from "../../../type";

export const initThemeState: ThemeStoreType = {
  useTheme: getLocalStorageItem("useTheme") === "true" ?? false,
  themeItem: {},
};
