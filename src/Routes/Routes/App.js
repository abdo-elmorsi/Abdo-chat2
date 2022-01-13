import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTES from "../Constants";
import Home from "../../pages";
import Login from "../../pages/auth/Signin";
import NotFound from "../../pages/PageNotFound";

import Admin from "./Admin";

import Layout from "../../layout/index"
export const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Admin exact component={Home} path={ROUTES.HOME} />
          <Admin component={Login} path={ROUTES.LOGIN} />

          {/* Not Found */}
          <Admin component={NotFound} path={ROUTES.NOT_FOUND} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default AppRouter;
