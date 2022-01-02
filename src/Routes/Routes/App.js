import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTES from "../Constants";
import Home from "../../pages";
import Collocations from "../../pages/Collocations";
import Login from "../../pages/auth/Signin";
import NotFound from "../../pages/PageNotFound";

import Admin from "./Admin";
export const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Admin exact component={Home} path={ROUTES.HOME} />
        <Admin exact component={Collocations} path={ROUTES.COLLOCATIONS} />
        <Admin component={Login} path={ROUTES.LOGIN} />

        {/* Not Found */}
        <Admin component={NotFound} path={ROUTES.NOT_FOUND} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
