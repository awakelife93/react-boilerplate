export const initModalStatus = () => {
  return {
    isShowModal: false,
    children: null,
    style: {},
  };
};

export const removeBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

export const revertBodyScroll = () => {
  document.body.style.overflow = "";
};
