import { getLocalStorageItem } from "@/core";
import { ThemeStoreType } from "@/redux/type";

export const initThemeState: ThemeStoreType = {
  useTheme: getLocalStorageItem("useTheme") === "true" ?? false,
  themeItem: {},
};
