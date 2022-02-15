import { createBrowserHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import Layout from "../common/layouts";
import { configureStore } from "../redux";
import routes, { RouteType } from "./routes";

const RouteComponent = () => {
  return (
    <ReduxProvider store={configureStore()}>
      <Router history={createBrowserHistory()}>
        <Switch>
          {routes.map((route: RouteType, idx: number) => {
            return (
              <Route
                key={`route_key_${idx}`}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => {
                  return <Layout {...props} {...route} />;
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </ReduxProvider>
  );
};

export default RouteComponent;
