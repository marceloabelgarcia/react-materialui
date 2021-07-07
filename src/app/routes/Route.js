import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RouteWrapper = ({
  component: Component,
  title: name,
  isPrivate,
  ...rest
}) => {
  const signed = localStorage.getItem('token');

  /**
  * Redirect user to SignIn page if he tries to access a private      route
  * without authentication.
  */
  if (isPrivate && !signed) {
    return <Redirect to="/signin" />;
  }
  /**
  * Redirect user to Main page if he tries to access a non private route
  * (SignIn or SignUp) after being authenticated.
  */
  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  /**
  * If not included on both previous cases, redirect user to the desired route.
  */
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = { title: '', isPrivate: false };

RouteWrapper.propTypes = {
  title: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object])
    .isRequired,
};

export default RouteWrapper;
