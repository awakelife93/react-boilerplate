import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { CSSProperties } from "styled-components";
import { findThemeItem } from "../../api/GetAPI";
import { ReduxStoreType } from "../../redux/type";
import { RoutePath } from "../../route/routes";
import {
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateComponentStyle,
  generateHeaderContainerStyle,
  generateLayoutContainerStyle,
  generateModalContainerStyle,
  generateThemeStyle
} from "../styles";
import { ComponentStyleType, ThemeItem } from "../type";

export type DesignContextType = {
  layoutStyles: CSSProperties;
  modalStyles: CSSProperties;
  headerStyles: CSSProperties;
  bodyStyles: CSSProperties;
  bottomStyles: CSSProperties;
  componentStyles: ComponentStyleType;
};

export const DesignContext = createContext<DesignContextType | null>(null);

const DesignProvider = ({ children, path } : { children: React.ReactElement, path: RoutePath }) => {
  const [themeItem, setThemeItem] = useState<ThemeItem>({});
  const { 
    reduxStore: {
      themeStore: {
        useTheme
      }
    }
  } = useSelector((state: ReduxStoreType) => state);

  const initThemeStyle = useCallback(async () => {
    const item: any = await findThemeItem();
    const themeItem = generateThemeStyle({ item });
    setThemeItem(themeItem);
  }, []);

  useEffect(() => {
    initThemeStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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