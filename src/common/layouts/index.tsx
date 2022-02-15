import React from "react";
import { useSelector } from "react-redux";
import "../../core/i18n";
import { connectWrapper } from "../../redux";
import { ReduxStoreType } from "../../redux/type";
import { Container } from "../components";
import AdLayout from "../components/Ad";
import ModalLayout from "../components/Modal";
import ActionProvider from "../contexts/ActionContext";
import DesignProvider from "../contexts/DesignContext";
import useAuth from "../hooks/useAuth";
import useI18nChange from "../hooks/useI18nChange";
import useSetupWindow from "../hooks/useSetupWindow";
import { LayoutIE } from "../interface";
import {
  showBottomContainer,
  showHeaderContainer
} from "../styles";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";
import HeaderLayout from "./Header";

const Layout: React.FC<LayoutIE> = (props: LayoutIE): React.ReactElement => {
  const {
    path,
    Component,
    showModalAction,
    initUserInfoAction,
    setUserInfoAction,
  } = props;
  const {
    reduxStore: {
      globalStore: { modalItem, isShowAdContainer },
    },
  } = useSelector((state: ReduxStoreType) => state);
  
  useAuth(setUserInfoAction);
  useSetupWindow(initUserInfoAction, showModalAction);
  useI18nChange();
  
  return (
    <DesignProvider path={path}>
      <ActionProvider {...props}>
        <Container.LayoutContainer>
          {modalItem.isShowModal && (
            <ModalLayout modalItem={modalItem} />
          )}
          {showHeaderContainer(path) && (
            <HeaderLayout {...props} />
          )}
          {isShowAdContainer && (
            <AdLayout {...props} />
          )}
          <BodyLayout {...props}>
            <Component {...props} />
          </BodyLayout>
          {showBottomContainer(path) && (
            <BottomLayout {...props} />
          )}
        </Container.LayoutContainer>
      </ActionProvider>
    </DesignProvider>
  );
};

export default connectWrapper(Layout);
