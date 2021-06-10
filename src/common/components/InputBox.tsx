import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonColor } from "../styles";

interface InputBoxIE extends CommonComponentIE {}
export const InputBox = styled.input`
  width: ${(props: InputBoxIE) => props.style?.width ?? "300px"};
  height: ${(props: InputBoxIE) => props.style?.height ?? "40px"};
  padding: ${(props: InputBoxIE) => props.style?.padding ?? "0px"};
  margin: ${(props: InputBoxIE) => props.style?.margin ?? "0px"};
  border: ${(props: InputBoxIE) =>
    props.style?.border ?? `1px solid ${CommonColor.INPUT_COLOR}`};
  border-radius: ${(props: InputBoxIE) =>
    props.style?.borderRadius ?? "0.25em"};
  margin-bottom: ${(props: InputBoxIE) => props.style?.marginBottom ?? "0px"};
`;
