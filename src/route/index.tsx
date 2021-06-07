import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import HeaderLayout from "../common/layouts/Header";
import BodyLayout from "../common/layouts/Body";
import BottomLayout from "../common/layouts/Bottom";
import routes, { RouteIE } from "./routes";
import { configureStore } from "../redux";
import {
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateHeaderContainerStyle,
  showBottomContainer,
  showHeaderContainer,
} from "../common/styles";

const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Switch>
          {routes.map((route: RouteIE, idx: number) => {
            return (
              <Route
                key={`route_key_${idx}`}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => {
                  const path = props.match.path ?? "";
                  const headerStyles = generateHeaderContainerStyle(path);
                  const bodyStyles = generateBodyContainerStyle(path);
                  const bottomStyles = generateBottomContainerStyle(path);
                  return (
                    <>
                      {showHeaderContainer(path) && (
                        <HeaderLayout {...props} {...headerStyles} />
                      )}
                      <BodyLayout {...bodyStyles}>
                        <route.component {...props} />
                      </BodyLayout>
                      {showBottomContainer(path) && (
                        <BottomLayout {...props} {...bottomStyles} />
                      )}
                    </>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
};
