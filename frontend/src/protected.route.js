import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // console.log("Global user", useContext(GlobalContext));
  // console.log("session token ", sessionStorage.getItem("token"));
  let user = useContext(GlobalContext);
  // console.log("user token AUTH ", user?.token);
  user = user?.token || {
    token: sessionStorage.getItem("token"),
  };
  // console.log("user AUTH = ", user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user?.token || sessionStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
