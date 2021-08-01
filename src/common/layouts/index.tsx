import React, { useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";
import { CSSProperties } from "styled-components";

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
  generateThemeStyle,
} from "../styles";

import { getLocalStorageItem, initWindowFunc } from "../../core";
import { findThemeItem, findUserProfile } from "../../api/GetAPI";
import { ComponentStyleIE, LayoutIE } from "../interface";
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
  const [themeItem, setThemeItem] = useState({});

  // init
  useEffect(() => {
    // generate global theme style
    if (_.isEmpty(themeItem)) {
      initThemeStyle();
    }

    // generate global function
    if (_.isEmpty(window.globalFunc)) {
      initWindowFunc({
        initUserInfoAction,
        showModalAction,
      });
    }

    const token = getLocalStorageItem("token");
    // 로그인이 된 상태라면
    if (!_.isEmpty(token) && userStore.user.isLogin === false) {
      initUserProfile();
    }
  }, []);

  const initThemeStyle = useCallback(async () => {
    const item: any = await findThemeItem();
    const themeItem = generateThemeStyle({ item });
    setThemeItem(themeItem);
  }, [themeItem]);

  const initUserProfile = useCallback(async () => {
    const profile: UserInfoIE = await findUserProfile();

    setUserInfoAction({
      isLogin: true,
      info: { ...profile },
    });
  }, [userStore.user.isLogin]);

  /**
   * common layout style
   * @function layoutStyles path에 따라 수정이 가능한 스타일
   */
  const layoutStyles: CSSProperties = useMemo(
    () => generateLayoutContainerStyle({ themeItem, path, isDarkMode }) ?? {},
    [themeItem, path, isDarkMode]
  );

  /**
   * modal layout style
   * @function modalStyles 따로 수정이 가능하게끔 확장해둔 형태
   */
  const modalStyles: CSSProperties = useMemo(
    () => generateModalContainerStyle({ themeItem, isDarkMode }) ?? {},
    [themeItem, isDarkMode]
  );

  /**
   * header, body, bottom styles
   * @function headerStyles 수정이 가능한 스타일
   * @function bodyStyles 수정이 가능한 스타일
   * @function bottomStyles 수정이 가능한 스타일
   */
  const headerStyles: CSSProperties = useMemo(
    () => generateHeaderContainerStyle({ themeItem, path, isDarkMode }) ?? {},
    [themeItem, path, isDarkMode]
  );
  const bodyStyles: CSSProperties = useMemo(
    () => generateBodyContainerStyle({ themeItem, path, isDarkMode }) ?? {},
    [themeItem, path, isDarkMode]
  );
  const bottomStyles: CSSProperties = useMemo(
    () => generateBottomContainerStyle({ themeItem, path, isDarkMode }) ?? {},
    [themeItem, path, isDarkMode]
  );

  /**
   * component styles
   * @function componentStyles 수정이 가능한 스타일
   */
  const componentStyles: ComponentStyleIE = useMemo(
    () => generateComponentStyle({ themeItem, path, isDarkMode }) ?? {},
    [themeItem, path, isDarkMode]
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
          buttonItem={modalItem.buttonItem}
          titleItem={modalItem.titleItem}
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
      <BodyLayout
        {...props}
        layoutStyles={bodyStyles}
        componentStyles={componentStyles}
      >
        <Component
          {...props}
          layoutStyles={bodyStyles}
          componentStyles={componentStyles}
        />
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
