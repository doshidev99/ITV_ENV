import { lazy, useEffect } from "react";
import axios from "axios";

import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "redux-store/auth";

import { PATH } from "./constant";

export const Routes = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const token = !!localStorage.getItem("token");
  const isLogin = !!localStorage.getItem("isLogedIn");

  useEffect(() => {
    const path = history.location.pathname;
    if (!token || !isLogin) {
      return history.push(PATH.login);
    } else {
      return history.push(path);
    }
  }, [history, token, isLogin]);

  return (
    <Switch>
      <Route
        path={PATH.login}
        exact
        component={lazy(() => import("page/Login"))}
      />
      <Route
        path={PATH.register}
        exact
        component={lazy(() => import("page/Register"))}
      />
      <Route
        path={PATH.dashboard}
        exact
        component={lazy(() => import("page/Dashboard"))}
      />
      <Route
        path={PATH.myProject}
        exact
        component={lazy(() => import("page/Project.js"))}
      />
    </Switch>
  );
};
