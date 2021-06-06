import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import HeaderLayout from "../common/layouts/Header";
import BodyLayout from "../common/layouts/Body";
import BottomLayout from "../common/layouts/Bottom";
import routes, { RouteIE } from "./routes";
import { configureStore } from "../redux";
import { showBottomContainer } from "../utils";

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
                  return (
                    <>
                      <HeaderLayout {...props} />
                      <BodyLayout>
                        <route.component {...props} />
                      </BodyLayout>
                      {showBottomContainer(props.match.path) && (
                        <BottomLayout {...props} />
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
