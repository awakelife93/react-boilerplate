import { getLocalStorageItem } from "../../../core";

export const initThemeState = {
  useTheme: getLocalStorageItem("useTheme") === "true" ?? false,
};
