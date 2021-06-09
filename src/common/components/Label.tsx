import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";

interface CommonLabelIE extends CommonComponentIE {}
export const CommonLabel = styled.label`
  font-size: ${(props: CommonLabelIE) => props["font-size"] ?? "1rem"};
  font-weight: ${(props: CommonLabelIE) => props["font-weight"] ?? ""};
  color: ${(props: CommonLabelIE) =>
    props["color"] ?? CommonTheme.WHITE_THEME.COMPONENT.COMMON_LABEL["color"]};
`;
