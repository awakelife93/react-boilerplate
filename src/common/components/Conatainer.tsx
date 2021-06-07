import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonColor } from "../styles";

export interface BodyContainerIE extends CommonComponentIE {}
export const BodyContainer = styled.div`
  width: ${(props: BodyContainerIE) => props["width"] ?? "100%"};
  padding: ${(props: BodyContainerIE) => props["padding"] ?? "0px"};
`;

export interface HeaderContainerIE extends CommonComponentIE {}
export const HeaderContainer = styled.div`
  width: ${(props: HeaderContainerIE) => props["width"] ?? "100%"};
  height: ${(props: HeaderContainerIE) => props["height"] ?? "80px"};
  padding: ${(props: HeaderContainerIE) => props["padding"] ?? "20px"};
  color: ${(props: HeaderContainerIE) =>
    props["color"] ?? CommonColor.TEXT_COLOR};
  font-size: ${(props: HeaderContainerIE) => props["font-size"] ?? "30px"};
  font-weight: ${(props: HeaderContainerIE) => props["font-weight"] ?? "bold"};
  display: ${(props: HeaderContainerIE) => props["display"] ?? "flex"};
  justify-content: ${(props: HeaderContainerIE) =>
    props["justify-content"] ?? "space-between"};
  align-items: ${(props: HeaderContainerIE) =>
    props["align-items"] ?? "center"};
  background-color: ${(props: HeaderContainerIE) =>
    props["background-color"] ?? CommonColor.MAIN_COLOR};
`;

export interface BottomContainerIE extends CommonComponentIE {}
export const BottomContainer = styled.footer`
  width: ${(props: BottomContainerIE) => props["width"] ?? "100%"};
  height: ${(props: BottomContainerIE) => props["height"] ?? "100px"};
  padding: ${(props: BottomContainerIE) => props["padding"] ?? "20px"};
  color: ${(props: BottomContainerIE) =>
    props["color"] ?? CommonColor.TEXT_COLOR};
  background-color: ${(props: BottomContainerIE) =>
    props["background-color"] ?? CommonColor.MAIN_COLOR};
  font-size: ${(props: BottomContainerIE) => props["font-size"] ?? "30px"};
  font-weight: ${(props: BottomContainerIE) => props["font-weight"] ?? "bold"};
`;

interface RowContainerIE extends CommonComponentIE {
  "flex-direction"?: string;
}
export const RowContainer = styled.div`
  display: ${(props: RowContainerIE) => props["display"] ?? "flex"};
  align-items: ${(props: RowContainerIE) => props["align-items"] ?? "center"};
  justify-content: ${(props: RowContainerIE) =>
    props["justify-content"] ?? "center"};
  align-content: ${(props: RowContainerIE) =>
    props["align-content"] ?? "center"};
  flex-direction: ${(props: RowContainerIE) =>
    props["flex-direction"] ?? "row"};
`;

interface ColumnContainerIE extends CommonComponentIE {
  "flex-direction"?: string;
  "align-items"?: string;
}
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
