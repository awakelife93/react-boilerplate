import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";

interface CommonLabelIE extends CommonComponentIE {}
export const CommonLabel = styled.label`
  color: ${(props: CommonLabelIE) =>
    props["color"] ?? CommonTheme.WHITE_THEME.COMPONENT.COMMON_LABEL["color"]};
`;
