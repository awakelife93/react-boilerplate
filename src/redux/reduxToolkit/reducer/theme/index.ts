import { ThemeItemType } from "@/common/type";
import { ThemeStoreType } from "@/redux/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initThemeState } from "./default";

const slice = createSlice({
  name: "theme",
  initialState: initThemeState,
  reducers: {
    initTheme: (state: ThemeStoreType): ThemeStoreType => {
      state.useTheme = initThemeState.useTheme;
      return state;
    },
    setTheme: (
      state: ThemeStoreType,
      action: PayloadAction<{ useTheme: boolean }>
    ): ThemeStoreType => {
      const { useTheme } = action.payload;

      state.useTheme = useTheme;

      return state;
    },
    setThemeItem: (
      state: ThemeStoreType,
      action: PayloadAction<{ themeItem: ThemeItemType }>
    ): ThemeStoreType => {
      const { themeItem } = action.payload;

      state.themeItem = themeItem;

      return state;
    },
  },
});

const themeWorker = {
  actions: slice.actions,
  reducer: slice.reducer,
};
export default themeWorker;
