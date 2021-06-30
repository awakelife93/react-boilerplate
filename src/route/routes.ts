import React from "react";

import MainPage from "../pages/Main";

import ContentsPage from "../pages/Contents";
import ContentsDetailPage from "../pages/Contents/Detail";

import { SignInPage, SignUpPage } from "../pages/Sign";

import { ComponentIE } from "../common/interface";

export enum RoutePath {
  MAIN = "/",
  SIGN_IN = "/signIn",
  SIGN_UP = "/signUp",
  CONTENTS = "/contents",
  CONTENTS_DETAIL = "/contentsDetail",
}
export interface RouteIE {
  path: string;
  exact: boolean;
  Component: React.FC<ComponentIE>;
}

const routes = [
  {
    path: "/",
    exact: true,
    Component: MainPage,
  },
  {
    path: "/signIn",
    exact: false,
    Component: SignInPage,
  },
  {
    path: "/signUp",
    exact: false,
    Component: SignUpPage,
  },
  {
    path: "/contents",
    exact: false,
    Component: ContentsPage,
  },
  {
    path: "/contentsDetail",
    exact: false,
    Component: ContentsDetailPage,
  },
];

export default routes;
