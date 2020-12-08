import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import "antd/dist/antd.css";
import "./style.css";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./redux-store/auth";
import projectReducer from "./redux-store/project";

import App from "./App";

const reducer = combineReducers({
  authReducer,
  projectReducer,
});

export const store = configureStore({ reducer });
export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div> loading </div>}>
      <App history={history} />
    </Suspense>
  </Provider>,
  document.getElementById("app")
);
