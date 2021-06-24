import React from "react";
import MainPage from "../pages/Main";
import ContentsPage from "../pages/Contents";
import { SignInPage, SignUpPage } from "../pages/Sign";
import { ComponentIE } from "../common/interface";

export enum RoutePath {
  MAIN = "/",
  SIGN_IN = "/signIn",
  SIGN_UP = "/signUp",
  CONTENTS = "/contents",
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
];

export default routes;
