import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonTheme } from "../styles";

interface CommonLabelIE extends CommonComponentIE {}
export const CommonLabel = styled.label`
  font-size: ${(props: CommonLabelIE) => props.style?.fontSize ?? "1rem"};
  font-weight: ${(props: CommonLabelIE) => props.style?.fontWeight ?? ""};
  color: ${(props: CommonLabelIE) =>
    props.style?.color ?? CommonTheme.WHITE_THEME.COMPONENT.COMMON_LABEL.color};
`;
