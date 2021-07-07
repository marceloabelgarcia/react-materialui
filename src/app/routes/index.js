import React from "react";
import { Switch } from "react-router-dom";

import { ForgotPassword, Register, Message } from "../../auth";
import { Landing } from "../../landing";
import LayoutContainer from "../layout";
import Route from "./Route";
import routes from "./routes";

export default () => {
  const routesMap = routes.map(({ name, ...rest }) => (
    <Route key={name} {...rest} />
  ));
  return (
    <Switch>
      <Route path="/signup" name="Registro" component={Register} />
      <Route path="/message" name="Message" component={Message} />
      <Route path="/signin" name="Login" component={Landing} />

      <Route
        path="/forgot-password"
        name="¿Olvidó su contraseña?"
        component={ForgotPassword}
      />

      <LayoutContainer routes={routes}>{routesMap}</LayoutContainer>
    </Switch>
  );
};
