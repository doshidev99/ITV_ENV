import { Fragment } from "react";

import { Router } from "react-router-dom";
import { Routes } from "./routes";

const App = ({ history }) => {
  return (
    <Fragment>
      <Router history={history}>
        <Routes />
      </Router>
    </Fragment>
  );
};

export default App;
