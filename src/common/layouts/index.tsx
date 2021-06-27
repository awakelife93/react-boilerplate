import React, { useCallback, useEffect, useMemo } from "react";
import _ from "lodash";

import { connectWrapper } from "../../redux";

import { Container } from "../components";
import AdLayout from "../components/Ad";
import HeaderLayout from "./Header";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";
import ModalLayout from "../components/Modal";

import {
  generateLayoutContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateHeaderContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
  generateModalContainerStyle,
} from "../styles";

import { getLocalStorageItem, initWindowFunc } from "../../core";
import { findUserProfile } from "../../api/GetAPI";
import { LayoutIE } from "../interface";
import { UserInfoIE } from "../../api/interface";
/**
 * Layout (최상단 컴포넌트)
 * @param {redux} props
 * @returns {React.FC}
 * @description
 * 라우팅이 되거나, Store의 데이터 감지를 통해 스타일을 제작하여 전체에게 뿌린다.
 * 해당 컴포넌트만 Redux에 연결하여 props로 자식 컴포넌트 전체 (페이지)에 뿌린다.
 * 그 외에 독립되는 컴포넌트는 connectWrapper로 연결
 */

const Layout: React.FC<LayoutIE> = (props: LayoutIE): React.ReactElement => {
  const {
    reduxStore: {
      userStore,
      globalStore: { modalItem, isShowAdContainer },
      themeStore: { isDarkMode },
    },
    path,
    Component,
    showModalAction,
    setUserInfoAction,
    initUserInfoAction,
  } = props;

  const initResources = useCallback(() => {
    Promise.all([(() => require("../const/index"))()]);
  }, []);

  const initUserProfile = useCallback(async () => {
    const profile: UserInfoIE = await findUserProfile();

    setUserInfoAction({
      isLogin: true,
      info: { ...profile },
    });
  }, [userStore.user.isLogin]);

  // init
  useEffect(() => {
    // resources preload
    initResources();
    // generate global function
    initWindowFunc({
      initUserInfoAction,
      showModalAction,
    });

    const token = getLocalStorageItem("token");
    // 로그인이 된 상태라면
    if (!_.isEmpty(token) && userStore.user.isLogin === false) {
      initUserProfile();
    }
  }, []);

  /**
   * common layout style
   * @function layoutStyles path에 따라 수정이 가능한 스타일
   */
  const layoutStyles = useMemo(
    () => generateLayoutContainerStyle({ path, isDarkMode }) ?? {},
    [path, isDarkMode]
  );

  /**
   * modal layout style
   * @function modalStyles 따로 수정이 가능하게끔 확장해둔 형태
   */
  const modalStyles = useMemo(
    () => generateModalContainerStyle({ isDarkMode }) ?? {},
    [isDarkMode]
  );

  /**
   * header, body, bottom styles
   * @function headerStyles 수정이 가능한 스타일
   * @function bodyStyles 수정이 가능한 스타일
   * @function bottomStyles 수정이 가능한 스타일
   */
  const headerStyles = useMemo(
    () => generateHeaderContainerStyle({ path, isDarkMode }) ?? {},
    [path, isDarkMode]
  );
  const bodyStyles = useMemo(
    () => generateBodyContainerStyle({ path, isDarkMode }) ?? {},
    [path, isDarkMode]
  );
  const bottomStyles = useMemo(
    () => generateBottomContainerStyle({ path, isDarkMode }) ?? {},
    [path, isDarkMode]
  );

  /**
   * component styles
   * @function componentStyles 수정이 가능한 스타일
   */
  const componentStyles = useMemo(
    () => generateComponentStyle({ path, isDarkMode }) ?? {},
    [path, isDarkMode]
  );

  return (
    <Container.LayoutContainer>
      {modalItem.isShowModal && (
        <ModalLayout
          {...props}
          layoutStyles={layoutStyles}
          componentStyles={componentStyles}
          children={modalItem.children}
          childrenProps={modalItem.childrenProps}
          style={{ ...modalStyles, ...modalItem.style }}
          option={modalItem.option}
        />
      )}
      {showHeaderContainer(path) && (
        <HeaderLayout
          {...props}
          layoutStyles={headerStyles}
          componentStyles={componentStyles}
        />
      )}
      {isShowAdContainer && (
        <AdLayout
          {...props}
          layoutStyles={layoutStyles}
          componentStyles={componentStyles}
        />
      )}
      <BodyLayout {...props} layoutStyles={bodyStyles}>
        <Component {...props} componentStyles={componentStyles} />
      </BodyLayout>
      {showBottomContainer(path) && (
        <BottomLayout
          {...props}
          layoutStyles={bottomStyles}
          componentStyles={componentStyles}
        />
      )}
    </Container.LayoutContainer>
  );
};

export default connectWrapper(Layout);
