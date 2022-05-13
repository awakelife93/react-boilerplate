import { ModalItemType } from "@/common/components/Modal/type";
import { ActionEnum } from "@/redux/type";
import { initGlobalState } from "../../reducer/global/default";

export const initShowAdAction = () => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value: initGlobalState.isShowAdContainer,
});

export const initShowModalAction = () => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value: initGlobalState.modalItem,
});

export const showAdAction = (value: boolean) => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value,
});

export const showModalAction = (value: ModalItemType) => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value,
});
