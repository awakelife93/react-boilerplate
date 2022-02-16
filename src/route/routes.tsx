import { RouteObject } from "react-router-dom";
import {
  ContentsDetail,
  ContentsList, LayoutComponent, Main,
  SignIn,
  SignUp
} from "./item";

export enum RoutePath {
  MAIN = "/",
  SIGN_IN = "/signIn",
  SIGN_UP = "/signUp",
  CONTENTS = "/contents",
  CONTENTS_DETAIL = "/contentsDetail",
}

const routes: RouteObject[] = [
  {
    path: RoutePath.MAIN,
    element: <LayoutComponent />,
    children: [
      { element: <Main />, index: true}
    ]
  },
  {
    path: RoutePath.SIGN_IN,
    element: <LayoutComponent />,
    children: [
      { element: <SignIn />, index: true}
    ]
  },
  {
    path: RoutePath.SIGN_UP,
    element: <LayoutComponent />,
    children: [
      { element: <SignUp />, index: true}
    ]
  },
  {
    path: RoutePath.CONTENTS,
    element: <LayoutComponent />,
    children: [
      { element: <ContentsList />, index: true}
    ]
  },
  {
    path: RoutePath.CONTENTS_DETAIL,
    element: <LayoutComponent />,
    children: [
      { element: <ContentsDetail />, index: true}
    ]
  },
];

export default routes;