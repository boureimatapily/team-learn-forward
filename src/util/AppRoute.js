import React from "react";
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props =>
        isVerifying ? (
          <div />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
  export default AppRoute;