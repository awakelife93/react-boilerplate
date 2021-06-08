import React from "react";
import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";
import ContentsPage from "../pages/Contents";
import { RouteComponentProps } from "react-router-dom";

export enum RoutePath {
  MAIN = "/",
  LOGIN = "/login",
  CONTENTS = "/contents",
}
export interface RouteIE {
  path: string;
  exact: boolean;
  Component: React.FC<RouteComponentProps>;
}

const routes = [
  {
    path: "/",
    exact: true,
    Component: MainPage,
  },
  {
    path: "/login",
    exact: false,
    Component: LoginPage,
  },
  {
    path: "/contents",
    exact: false,
    Component: ContentsPage,
  },
];

export default routes;
