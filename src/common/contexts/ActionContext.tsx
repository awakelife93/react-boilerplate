import { ContentsType } from "@/api/GetAPI/type";
import { ReduxActionType, UseReduxType, UserStoreType } from "@/redux/type";
import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { ModalItem } from "../components/Modal/type";
import { ThemeItem } from "../type";

export const ActionContext = createContext<ReduxActionType | null>(null);

const ActionProvider = ({ children, useRedux } : { children: React.ReactElement, useRedux: UseReduxType }) => {
  const {
    getContentsAction,
    initContentsAction,
    initShowAdAction,
    initShowModalAction,
    initThemeAction,
    initUserInfoAction,
    setThemeAction,
    setThemeItemAction,
    setUserInfoAction,
    showAdAction,
    showModalAction
  } = require(`../../redux/${useRedux}/action`);
  
  const dispatch = useDispatch();

  const _initContentsAction = () => {
    dispatch(initContentsAction());
  };

  const _getContentsAction = (value: ContentsType[]) => {
    dispatch(getContentsAction(value));
  };

  const _initThemeAction = () => {
    dispatch(initThemeAction());
  };

  const _setThemeAction = (value: boolean) => {
    dispatch(setThemeAction(value));
  };

  const _setThemeItemAction = (value: ThemeItem) => {
    dispatch(setThemeItemAction(value));
  };

  const _initShowAdAction = () => {
    dispatch(initShowAdAction());
  };

  const _showAdAction = (value: boolean) => {
    dispatch(showAdAction(value));
  };

  const _initShowModalAction = () => {
    dispatch(initShowModalAction());
  };

  const _showModalAction = (value: ModalItem) => {
    dispatch(showModalAction(value));
  };

  const _setUserInfoAction = (value: UserStoreType) => {
    dispatch(setUserInfoAction(value));
  }

  const _initUserInfoAction = () => {
    dispatch(initUserInfoAction());
  };

  return (
    <ActionContext.Provider
      value={{
        initContentsAction: _initContentsAction,
        getContentsAction: _getContentsAction,
        initThemeAction: _initThemeAction,
        setThemeAction: _setThemeAction,
        setThemeItemAction: _setThemeItemAction,
        initShowAdAction: _initShowAdAction,
        showAdAction: _showAdAction,
        initShowModalAction: _initShowModalAction,
        showModalAction: _showModalAction,
        setUserInfoAction: _setUserInfoAction,
        initUserInfoAction: _initUserInfoAction,
      }}
    >
      {children}
    </ActionContext.Provider>
  )
};

export default ActionProvider;