import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import HeaderLayout from "../common/layouts/Header";
import BottomLayout from "../common/layouts/Bottom";
import routes from "./routes";
import { configureStore } from "../redux";

// const { store, persistor } = configureStore();
const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router history={createBrowserHistory()}>
        <HeaderLayout />
        <Switch>
          {routes.map((route: any, idx: number) => {
            return (
              <Route
                key={`route_key_${idx}`}
                path={route.path}
                component={route.component}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
        </Switch>
        <BottomLayout />
      </Router>
      {/* </PersistGate> */}
    </Provider>
  );
};
