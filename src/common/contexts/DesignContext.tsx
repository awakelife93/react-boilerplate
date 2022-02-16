import React, { createContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CSSProperties } from "styled-components";
import { ReduxStoreType } from "../../redux/type";
import {
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  generateHeaderContainerStyle,
  generateLayoutContainerStyle,
  generateModalContainerStyle
} from "../styles";
import { ComponentStyleType } from "../type";

export type DesignContextType = {
  layoutStyles: CSSProperties;
  modalStyles: CSSProperties;
  headerStyles: CSSProperties;
  bodyStyles: CSSProperties;
  bottomStyles: CSSProperties;
  componentStyles: ComponentStyleType;
};

export const DesignContext = createContext<DesignContextType | null>(null);

const DesignProvider = ({ children } : { children: React.ReactElement }) => {
  const { 
    reduxStore: {
      themeStore: {
        useTheme,
        themeItem
      }
    }
  } = useSelector((state: ReduxStoreType) => state);
  const { pathname } = useLocation();
  
  /**
   * common layout style
   * @function layoutStyles path에 따라 수정이 가능한 스타일
   */
  const layoutStyles: CSSProperties = useMemo(
    () => generateLayoutContainerStyle({ themeItem: themeItem ?? {}, pathname, useTheme }) ?? {},
    [themeItem, pathname, useTheme]
  );

  /**
   * modal layout style
   * @function modalStyles 따로 수정이 가능하게끔 확장해둔 형태
   */
  const modalStyles: CSSProperties = useMemo(
    () => generateModalContainerStyle({ themeItem: themeItem ?? {}, useTheme }) ?? {},
    [themeItem, useTheme]
  );

  /**
   * header, body, bottom styles
   * @function headerStyles 수정이 가능한 스타일
   * @function bodyStyles 수정이 가능한 스타일
   * @function bottomStyles 수정이 가능한 스타일
   */
  const headerStyles: CSSProperties = useMemo(
    () => generateHeaderContainerStyle({ themeItem: themeItem ?? {}, pathname, useTheme }) ?? {},
    [themeItem, pathname, useTheme]
  );
  const bodyStyles: CSSProperties = useMemo(
    () => generateBodyContainerStyle({ themeItem: themeItem ?? {}, pathname, useTheme }) ?? {},
    [themeItem, pathname, useTheme]
  );
  const bottomStyles: CSSProperties = useMemo(
    () => generateBottomContainerStyle({ themeItem: themeItem ?? {}, pathname, useTheme }) ?? {},
    [themeItem, pathname, useTheme]
  );

  /**
   * component styles
   * @function componentStyles 수정이 가능한 스타일
   */
  const componentStyles: ComponentStyleType = useMemo(
    () => generateComponentStyle({ themeItem: themeItem ?? {}, pathname, useTheme }) ?? {},
    [themeItem, pathname, useTheme]
  );

  return (
    <DesignContext.Provider
      value={{
        layoutStyles,
        modalStyles,
        headerStyles,
        bodyStyles,
        bottomStyles,
        componentStyles
      }}
    >
      {children}
    </DesignContext.Provider>
  )
};

export default DesignProvider;