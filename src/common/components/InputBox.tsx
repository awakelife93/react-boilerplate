import styled from "styled-components";
import { CommonComponentIE } from ".";

interface InputBoxIE extends CommonComponentIE {}
export const InputBox = styled.input`
  width: ${(props: InputBoxIE) => props["width"] ?? "300px"};
  height: ${(props: InputBoxIE) => props["height"] ?? "40px"};
  margin: ${(props: InputBoxIE) => props["margin"] ?? "20px"};
`;
