import React from "react";
import { connect } from "react-redux";
import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
  Dispatch
} from "redux";
import thunkMiddleware from "redux-thunk";
import * as action from "./action";
import { ReduxStoreIE } from "./interface";
import reducers from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const mapStateToProps = (state: ReduxStoreIE) => state;
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch);

export const connectWrapper = (component: React.FC<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export const configureStore = (initialState: Partial<ReduxStoreIE> = {}) => {
  const store = createStoreWithMiddleware(
    /**
     * reduxStore라는 이름으로 전역 Store들을 묶어준다.
     */
    combineReducers({ reduxStore: reducers }),
    initialState
  );
  return store;
};
