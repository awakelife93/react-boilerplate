import { UserStoreItemType, UserStoreType } from "@/redux/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initUserState } from "./default";

const slice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    initUserInfo: (state: UserStoreType): UserStoreType => {
      state.user = initUserState.user;
      return state;
    },
    setUserInfo: (
      state: UserStoreType,
      action: PayloadAction<UserStoreItemType>
    ): UserStoreType => {
      state.user = action.payload;
      return state;
    },
  },
});

const userWorker = {
  actions: slice.actions,
  reducer: slice.reducer,
};
export default userWorker;
