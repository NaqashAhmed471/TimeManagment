import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteManager = ({
  isAuth,
  component: Component,
  roles,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth && roles === "admin") {
          return (
            <>
              {console.log("xxx", roles)}
              <Component />
              <div>Here</div>
            </>
          );
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRouteManager;
