import styled from "styled-components";
import { CommonTheme } from "../styles";
import { CommonComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface ICommonLabel extends Partial<CommonComponentType> {}
export const CommonLabel = styled.label`
  font-size: ${(props: ICommonLabel) => props.style?.fontSize ?? "1rem"};
  font-weight: ${(props: ICommonLabel) => props.style?.fontWeight ?? ""};
  color: ${(props: ICommonLabel) =>
    props.style?.color ??
    CommonTheme.WHITE_THEME_STYLE.COMPONENT.COMMON_LABEL.color};
`;
