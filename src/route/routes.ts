import React from "react";
import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";
import ContentsPage from "../pages/Contents";
import { RouteComponentProps } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainPage,
  },
  {
    path: "/login",
    exact: false,
    component: LoginPage,
  },
  {
    path: "/contents",
    exact: false,
    component: ContentsPage,
  },
];

export enum RoutePath {
  MAIN = "/",
  LOGIN = "/login",
  CONTENTS = "/contents",
}
export interface RouteIE {
  path: string;
  exact: boolean;
  component: React.FC<RouteComponentProps>;
}
export default routes;
