import styled from "styled-components";
import { CommonComponentIE } from ".";

interface SubMitButtonIE extends CommonComponentIE {}

export const SubMitButton = styled.button`
  width: ${(props: SubMitButtonIE) => props["width"] ?? "150px"};
  height: ${(props: SubMitButtonIE) => props["height"] ?? "40px"};
  margin: ${(props: SubMitButtonIE) => props["margin"] ?? "20px"};
  color: ${(props: SubMitButtonIE) => props["color"] ?? "white"};
  background-color: ${(props: SubMitButtonIE) =>
    props["background-color"] ?? "black"};
  border: ${(props: SubMitButtonIE) => props["border"] ?? "none"};
`;
