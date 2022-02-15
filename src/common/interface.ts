import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReduxActionType } from "../redux/type";
import { RouteType } from "../route/routes";
import { UnknownObject } from "./type";

export interface LayoutIE
  extends ReduxActionType,
    RouteComponentProps,
    RouteType {}

export interface ComponentIE extends LayoutIE {
  // 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<UnknownObject>;
}
