import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";
import { CommonColor } from "../styles";

interface SubMitButtonIE extends CommonComponentIE {}
export const SubMitButton = styled.button`
  width: ${(props: SubMitButtonIE) => props["width"] ?? "150px"};
  height: ${(props: SubMitButtonIE) => props["height"] ?? "40px"};
  margin: ${(props: SubMitButtonIE) => props["margin"] ?? "20px"};
  color: ${(props: SubMitButtonIE) =>
    props["color"] ??
    CommonTheme.WHITE_THEME.COMPONENT.SUB_MIT_BUTTON["background-color"]};
  background-color: ${(props: SubMitButtonIE) =>
    props["background-color"] ?? "black"};
  border: ${(props: SubMitButtonIE) => props["border"] ?? "none"};
  border-radius: ${(props: SubMitButtonIE) =>
    props["border-radius"] ?? "0.25em"};
`;

interface TextButtonIE extends CommonComponentIE {}
export const TextButton = styled.button`
  background-color: ${(props: TextButtonIE) =>
    props["background-color"] ?? CommonColor.TRANS_PARENT};
  border: ${(props: TextButtonIE) => props["border"] ?? "none"};
  color: ${(props: TextButtonIE) =>
    props["color"] ??
    CommonTheme.WHITE_THEME.COMPONENT.SUB_MIT_BUTTON["color"]};
  font-size: ${(props: TextButtonIE) => props["font-size"] ?? "15px"};
`;
