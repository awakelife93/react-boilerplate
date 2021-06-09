import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonColor } from "../styles";

interface InputBoxIE extends CommonComponentIE {}
export const InputBox = styled.input`
  width: ${(props: InputBoxIE) => props["width"] ?? "300px"};
  height: ${(props: InputBoxIE) => props["height"] ?? "40px"};
  margin: ${(props: InputBoxIE) => props["margin"] ?? "0px"};
  border: ${(props: InputBoxIE) =>
    props["border"] ?? `1px solid ${CommonColor.INPUT_COLOR}`};
  border-radius: ${(props: InputBoxIE) => props["border-radius"] ?? "0.25em"};
  margin-bottom: ${(props: InputBoxIE) => props["margin-bottom"] ?? "0px"};
`;
