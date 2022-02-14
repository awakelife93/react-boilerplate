import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CSSProperties } from "styled-components";
import { findThemeItem } from "../../api/GetAPI";
import { initWindowFunc } from "../../core";
import { connectWrapper } from "../../redux";
import { Container } from "../components";
import AdLayout from "../components/Ad";
import ModalLayout from "../components/Modal";
import useAuth from "../hooks/useAuth";
import { LayoutIE } from "../interface";
import {
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  generateHeaderContainerStyle,
  generateLayoutContainerStyle,
  generateModalContainerStyle,
  generateThemeStyle,
  showBottomContainer,
  showHeaderContainer
} from "../styles";
import { ComponentStyleType, ThemeItem } from "../type";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";
import HeaderLayout from "./Header";

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
      globalStore: { modalItem, isShowAdContainer },
      themeStore: { useTheme },
    },
    path,
    Component,
    showModalAction,
    initUserInfoAction,
  } = props;
  const [themeItem, setThemeItem] = useState<ThemeItem>({});
  useAuth();
  
  const initThemeStyle = useCallback(async () => {
    const item: any = await findThemeItem();
    const themeItem = generateThemeStyle({ item });
    setThemeItem(themeItem);
  }, []);


  /**
   * common layout style
   * @function layoutStyles path에 따라 수정이 가능한 스타일
   */
  const layoutStyles: CSSProperties = useMemo(
    () => generateLayoutContainerStyle({ themeItem, path, useTheme }) ?? {},
    [themeItem, path, useTheme]
  );

  /**
   * modal layout style
   * @function modalStyles 따로 수정이 가능하게끔 확장해둔 형태
   */
  const modalStyles: CSSProperties = useMemo(
    () => generateModalContainerStyle({ themeItem, useTheme }) ?? {},
    [themeItem, useTheme]
  );

  /**
   * header, body, bottom styles
   * @function headerStyles 수정이 가능한 스타일
   * @function bodyStyles 수정이 가능한 스타일
   * @function bottomStyles 수정이 가능한 스타일
   */
  const headerStyles: CSSProperties = useMemo(
    () => generateHeaderContainerStyle({ themeItem, path, useTheme }) ?? {},
    [themeItem, path, useTheme]
  );
  const bodyStyles: CSSProperties = useMemo(
    () => generateBodyContainerStyle({ themeItem, path, useTheme }) ?? {},
    [themeItem, path, useTheme]
  );
  const bottomStyles: CSSProperties = useMemo(
    () => generateBottomContainerStyle({ themeItem, path, useTheme }) ?? {},
    [themeItem, path, useTheme]
  );

  /**
   * component styles
   * @function componentStyles 수정이 가능한 스타일
   */
  const componentStyles: ComponentStyleType = useMemo(
    () => generateComponentStyle({ themeItem, path, useTheme }) ?? {},
    [themeItem, path, useTheme]
  );

  // init
  useEffect(() => {
    // generate global theme style
    initThemeStyle();
    // generate global function
    initWindowFunc({
      initUserInfoAction,
      showModalAction,
    });
  }, [
    initThemeStyle,
    initUserInfoAction,
    showModalAction,
  ]);

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
