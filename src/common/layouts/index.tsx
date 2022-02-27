import { ReduxStoreType } from "@/redux/type";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import "../../core/i18n";
import { Container } from "../components";
import AdLayout from "../components/Ad";
import ModalLayout from "../components/Modal";
import { ILayout } from "../interface";
import {
  showBottomContainer,
  showHeaderContainer
} from "../styles";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";
import HeaderLayout from "./Header";

const Layout: React.FC<ILayout> = (props: ILayout): React.ReactElement => {
  const {
    reduxStore: {
      globalStore: { modalItem, isShowAdContainer },
    },
  } = useSelector((state: ReduxStoreType) => state);
  const { pathname }= useLocation();

  return (
    <Container.LayoutContainer>
      {modalItem.isShowModal && (
        <ModalLayout modalItem={modalItem} />
      )}
      {showHeaderContainer(pathname) && (
        <HeaderLayout />
      )}
      {isShowAdContainer && (
        <AdLayout />
      )}
      <BodyLayout>
        <Outlet />
      </BodyLayout>
      {showBottomContainer(pathname) && (
        <BottomLayout />
      )}
    </Container.LayoutContainer>
  );
};

export default Layout;
