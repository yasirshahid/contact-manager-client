import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (
  { component: Component, ...rest },
  { isAuthenticated, loading }
) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect push to='login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state, props) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {})(PrivateRoute);
