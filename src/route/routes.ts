import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";
import React from "react";
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
];
export interface RouteIE {
  path: string;
  exact: boolean;
  component: React.FC<RouteComponentProps>;
}
export default routes;
