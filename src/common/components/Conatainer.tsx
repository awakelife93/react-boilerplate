import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";

export interface LayoutContainerIE extends CommonComponentIE {}
export const LayoutContainer = styled.div`
  position: ${(props: LayoutContainerIE) => props.style?.position ?? ""};
  top: ${(props: LayoutContainerIE) => props.style?.top ?? "0px"};
  bottom: ${(props: LayoutContainerIE) => props.style?.bottom ?? "0px"};
  left: ${(props: LayoutContainerIE) => props.style?.left ?? "0px"};
  right: ${(props: LayoutContainerIE) => props.style?.right ?? "0px"};
`;

export interface BodyContainerIE extends CommonComponentIE {}
export const BodyContainer = styled.div`
  width: ${(props: BodyContainerIE) => props.style?.width ?? "100%"};
  height: ${(props: BodyContainerIE) => props.style?.height ?? "100%"};
  padding: ${(props: BodyContainerIE) => props.style?.padding ?? "0px"};
  background-color: ${(props: BodyContainerIE) =>
    props.style?.backgroundColor ??
    CommonTheme.WHITE_THEME.LAYOUT.backgroundColor};
`;

export interface HeaderContainerIE extends CommonComponentIE {}
export const HeaderContainer = styled.div`
  width: ${(props: HeaderContainerIE) => props.style?.width ?? "100%"};
  height: ${(props: HeaderContainerIE) => props.style?.height ?? "80px"};
  padding: ${(props: HeaderContainerIE) => props.style?.padding ?? "20px"};
  font-size: ${(props: HeaderContainerIE) => props.style?.fontSize ?? "30px"};
  font-weight: ${(props: HeaderContainerIE) =>
    props.style?.fontWeight ?? "bold"};
  display: ${(props: HeaderContainerIE) => props.style?.display ?? "flex"};
  justify-content: ${(props: HeaderContainerIE) =>
    props.style?.justifyContent ?? "space-between"};
  align-items: ${(props: HeaderContainerIE) =>
    props.style?.alignItems ?? "center"};
  background-color: ${(props: HeaderContainerIE) =>
    props.style?.backgroundColor ??
    CommonTheme.WHITE_THEME.LAYOUT.backgroundColor};
`;

export interface BottomContainerIE extends CommonComponentIE {}
export const BottomContainer = styled.footer`
  width: ${(props: BottomContainerIE) => props.style?.width ?? "100%"};
  height: ${(props: BottomContainerIE) => props.style?.height ?? "100px"};
  padding: ${(props: BottomContainerIE) => props.style?.padding ?? "20px"};
  background-color: ${(props: BottomContainerIE) =>
    props.style?.backgroundColor ??
    CommonTheme.WHITE_THEME.LAYOUT.backgroundColor};
  font-size: ${(props: BottomContainerIE) => props.style?.fontSize ?? "30px"};
  font-weight: ${(props: BottomContainerIE) =>
    props.style?.fontWeight ?? "bold"};
`;

interface RowContainerIE extends CommonComponentIE {}
export const RowContainer = styled.div`
  display: ${(props: RowContainerIE) => props.style?.display ?? "flex"};
  align-items: ${(props: RowContainerIE) =>
    props.style?.alignItems ?? "center"};
  justify-content: ${(props: RowContainerIE) =>
    props.style?.justifyContent ?? "center"};
  align-content: ${(props: RowContainerIE) =>
    props.style?.alignContent ?? "center"};
  align-self: ${(props: RowContainerIE) => props.style?.alignSelf ?? ""};
  flex-direction: ${(props: RowContainerIE) =>
    props.style?.flexDirection ?? "row"};
`;

interface ColumnContainerIE extends CommonComponentIE {}
export const ColumnContainer = styled.div`
  display: ${(props: ColumnContainerIE) => props.style?.display ?? "flex"};
  justify-content: ${(props: ColumnContainerIE) =>
    props.style?.justifyContent ?? "center"};
  align-content: ${(props: ColumnContainerIE) =>
    props.style?.alignContent ?? "center"};
  align-items: ${(props: ColumnContainerIE) =>
    props.style?.alignItems ?? "center"};
  flex-direction: ${(props: ColumnContainerIE) =>
    props.style?.flexDirection ?? "column"};
`;
