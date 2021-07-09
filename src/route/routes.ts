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

const routes: RouteIE[] = [
  {
    path: RoutePath.MAIN,
    exact: true,
    Component: MainPage,
  },
  {
    path: RoutePath.SIGN_IN,
    exact: false,
    Component: SignInPage,
  },
  {
    path: RoutePath.SIGN_UP,
    exact: false,
    Component: SignUpPage,
  },
  {
    path: RoutePath.CONTENTS,
    exact: false,
    Component: ContentsPage,
  },
  {
    path: RoutePath.CONTENTS_DETAIL,
    exact: false,
    Component: ContentsDetailPage,
  },
];

export default routes;
