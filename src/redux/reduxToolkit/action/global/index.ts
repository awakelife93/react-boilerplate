import { ModalItem } from "../../../../common/components/Modal/type";
import globalWorker from "../../reducer/global";

export const initShowAdAction = () => globalWorker.actions.initShowAd();

export const initShowModalAction = () => globalWorker.actions.initShowModal();

export const showAdAction = (value: boolean) =>
  globalWorker.actions.showAd(value);

export const showModalAction = (value: ModalItem) =>
  globalWorker.actions.showModal({ modalItem: value });
