import { connect } from "react-redux";
import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import * as action from "./action";
import reducers from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(action, dispatch);

export const connectWrapper = (component: any) =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export const configureStore = (initialState = {}) => {
  const persistConfig = { key: "root", storage };
  const reduxStore = persistReducer(persistConfig, reducers);
  const store = createStoreWithMiddleware(
    /**
     * reduxStore라는 이름으로 전역 Store들을 묶어준다.
     */
    combineReducers({ reduxStore }),
    initialState
  );
  // const persistor = persistStore(store);
  // return { store, persistor };
  return store;
};
