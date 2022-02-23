import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import reducers from "./reducer";

const store = configureStore({
  reducer: combineReducers({ reduxStore: reducers }),
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<unknown>) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === "true",
});

export default store;
