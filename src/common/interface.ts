import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReduxIE } from "../redux/interface";
import { RouteIE } from "../route/routes";

export interface LayoutIE extends ReduxIE, RouteComponentProps, RouteIE {}

export interface ComponentIE extends LayoutIE {
  layoutStyles?: any;
  componentStyles?: any;
  children?: React.ReactElement;
}
