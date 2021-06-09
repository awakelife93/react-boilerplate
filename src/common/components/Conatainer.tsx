import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";

export interface LayoutContainerIE extends CommonComponentIE {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
export const LayoutContainer = styled.div`
  position: ${(props: LayoutContainerIE) => props["position"] ?? ""};
  top: ${(props: LayoutContainerIE) => props["top"] ?? "0px"};
  bottom: ${(props: LayoutContainerIE) => props["bottom"] ?? "0px"};
  left: ${(props: LayoutContainerIE) => props["left"] ?? "0px"};
  right: ${(props: LayoutContainerIE) => props["right"] ?? "0px"};
`;

export interface BodyContainerIE extends CommonComponentIE {}
export const BodyContainer = styled.div`
  width: ${(props: BodyContainerIE) => props["width"] ?? "100%"};
  height: ${(props: BodyContainerIE) => props["height"] ?? "100%"};
  padding: ${(props: BodyContainerIE) => props["padding"] ?? "0px"};
  background-color: ${(props: BodyContainerIE) =>
    props["background-color"] ??
    CommonTheme.WHITE_THEME.LAYOUT["background-color"]};
`;

export interface HeaderContainerIE extends CommonComponentIE {}
export const HeaderContainer = styled.div`
  width: ${(props: HeaderContainerIE) => props["width"] ?? "100%"};
  height: ${(props: HeaderContainerIE) => props["height"] ?? "80px"};
  padding: ${(props: HeaderContainerIE) => props["padding"] ?? "20px"};
  font-size: ${(props: HeaderContainerIE) => props["font-size"] ?? "30px"};
  font-weight: ${(props: HeaderContainerIE) => props["font-weight"] ?? "bold"};
  display: ${(props: HeaderContainerIE) => props["display"] ?? "flex"};
  justify-content: ${(props: HeaderContainerIE) =>
    props["justify-content"] ?? "space-between"};
  align-items: ${(props: HeaderContainerIE) =>
    props["align-items"] ?? "center"};
  background-color: ${(props: HeaderContainerIE) =>
    props["background-color"] ??
    CommonTheme.WHITE_THEME.LAYOUT["background-color"]};
`;

export interface BottomContainerIE extends CommonComponentIE {}
export const BottomContainer = styled.footer`
  width: ${(props: BottomContainerIE) => props["width"] ?? "100%"};
  height: ${(props: BottomContainerIE) => props["height"] ?? "100px"};
  padding: ${(props: BottomContainerIE) => props["padding"] ?? "20px"};
  background-color: ${(props: BottomContainerIE) =>
    props["background-color"] ??
    CommonTheme.WHITE_THEME.LAYOUT["background-color"]};
  font-size: ${(props: BottomContainerIE) => props["font-size"] ?? "30px"};
  font-weight: ${(props: BottomContainerIE) => props["font-weight"] ?? "bold"};
`;

interface RowContainerIE extends CommonComponentIE {}
export const RowContainer = styled.div`
  display: ${(props: RowContainerIE) => props["display"] ?? "flex"};
  align-items: ${(props: RowContainerIE) => props["align-items"] ?? "center"};
  justify-content: ${(props: RowContainerIE) =>
    props["justify-content"] ?? "center"};
  align-content: ${(props: RowContainerIE) =>
    props["align-content"] ?? "center"};
  align-self: ${(props: RowContainerIE) => props["align-self"] ?? ""};
  flex-direction: ${(props: RowContainerIE) =>
    props["flex-direction"] ?? "row"};
`;

interface ColumnContainerIE extends CommonComponentIE {}
export const ColumnContainer = styled.div`
  display: ${(props: ColumnContainerIE) => props["display"] ?? "flex"};
  justify-content: ${(props: ColumnContainerIE) =>
    props["justify-content"] ?? "center"};
  align-content: ${(props: ColumnContainerIE) =>
    props["align-content"] ?? "center"};
  align-items: ${(props: ColumnContainerIE) =>
    props["align-items"] ?? "center"};
  flex-direction: ${(props: ColumnContainerIE) =>
    props["flex-direction"] ?? "column"};
`;
