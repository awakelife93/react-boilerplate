import { ReduxActionProviderType, UseReduxType, UserStoreItemType } from "@/redux/type";
import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { ModalItemType } from "../components/Modal/type";
import { ThemeItemType } from "../type";

export const ActionContext = createContext<ReduxActionProviderType | null>(null);

const ActionProvider = ({ children, useRedux } : { children: React.ReactElement, useRedux: UseReduxType }) => {
  const {
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

  const _initThemeAction = () => {
    dispatch(initThemeAction());
  };

  const _setThemeAction = (value: boolean) => {
    dispatch(setThemeAction(value));
  };

  const _setThemeItemAction = (value: ThemeItemType) => {
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

  const _showModalAction = (value: ModalItemType) => {
    dispatch(showModalAction(value));
  };

  const _setUserInfoAction = (value: UserStoreItemType) => {
    dispatch(setUserInfoAction(value));
  }

  const _initUserInfoAction = () => {
    dispatch(initUserInfoAction());
  };

  return (
    <ActionContext.Provider
      value={{
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