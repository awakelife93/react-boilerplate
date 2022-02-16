import { ElementType, lazy, Suspense } from "react";
import Layout from "../common/layouts";

// * 추후 확장하기 위해 따로 빼둠.
export const LayoutComponent = (): React.ReactElement => {
  return <Layout />;
};

export const generateComponent = (Component: ElementType) => (props: any) => (
  <Suspense fallback={false}>
    <Component {...props} />
  </Suspense>
);

export const Main = generateComponent(lazy(() => import("../pages/Main")));
export const SignIn = generateComponent(lazy(() => import("../pages/Sign/SignIn")));
export const SignUp = generateComponent(lazy(() => import("../pages/Sign/SignUp")));
export const ContentsList = generateComponent(lazy(() => import("../pages/Contents")));
export const ContentsDetail= generateComponent(lazy(() => import("../pages/Contents/Detail")));