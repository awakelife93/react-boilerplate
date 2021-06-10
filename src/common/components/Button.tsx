import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";
import { CommonColor } from "../styles";

interface SubMitButtonIE extends CommonComponentIE {}
export const SubMitButton = styled.button`
  width: ${(props: SubMitButtonIE) => props.style?.width ?? "150px"};
  height: ${(props: SubMitButtonIE) => props.style?.height ?? "40px"};
  margin: ${(props: SubMitButtonIE) => props.style?.margin ?? "20px"};
  color: ${(props: SubMitButtonIE) =>
    props.style?.color ??
    CommonTheme.WHITE_THEME.COMPONENT.SUB_MIT_BUTTON["backgroundColor"]};
  background-color: ${(props: SubMitButtonIE) =>
    props.style?.backgroundColor ?? "black"};
  border: ${(props: SubMitButtonIE) => props.style?.border ?? "none"};
  border-radius: ${(props: SubMitButtonIE) =>
    props.style?.borderRadius ?? "0.25em"};
`;

interface TextButtonIE extends CommonComponentIE {}
export const TextButton = styled.button`
  background-color: ${(props: TextButtonIE) =>
    props.style?.backgroundColor ?? CommonColor.TRANS_PARENT};
  border: ${(props: TextButtonIE) => props.style?.border ?? "none"};
  color: ${(props: TextButtonIE) =>
    props.style?.color ??
    CommonTheme.WHITE_THEME.COMPONENT.SUB_MIT_BUTTON["color"]};
  font-size: ${(props: TextButtonIE) => props.style?.fontSize ?? "15px"};
`;
