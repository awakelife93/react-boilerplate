import { ModalItemType } from "@/common/components/Modal/type";
import { GlobalStoreType } from "@/redux/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initGlobalState } from "./default";

const slice = createSlice({
  name: "global",
  initialState: initGlobalState,
  reducers: {
    initShowAd: (state: GlobalStoreType): GlobalStoreType => {
      state.isShowAdContainer = initGlobalState.isShowAdContainer;
      return state;
    },
    initShowModal: (state: GlobalStoreType): GlobalStoreType => {
      state.modalItem = initGlobalState.modalItem;
      return state;
    },
    showAd: (
      state: GlobalStoreType,
      action: PayloadAction<{ isShowAdContainer: boolean }>
    ): GlobalStoreType => {
      const { isShowAdContainer } = action.payload;

      state.isShowAdContainer = isShowAdContainer;

      return state;
    },
    showModal: (
      state: GlobalStoreType,
      action: PayloadAction<{ modalItem: ModalItemType }>
    ): GlobalStoreType => {
      const { modalItem } = action.payload;

      state.modalItem = modalItem;

      return state;
    },
  },
});

const globalWorker = {
  actions: slice.actions,
  reducer: slice.reducer,
};
export default globalWorker;
