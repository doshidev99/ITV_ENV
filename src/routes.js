import { lazy } from "react";

import { Switch, Route, useHistory } from "react-router-dom";

import { PATH } from "./constant";

export const Routes = () => {
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
