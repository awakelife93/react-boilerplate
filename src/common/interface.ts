import React from "react";
import { UnknownObject } from "./type";

export interface LayoutIE {}

export interface ComponentIE {
  // * 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // * 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<UnknownObject>;
}
