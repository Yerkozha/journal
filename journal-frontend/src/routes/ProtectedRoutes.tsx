import React from "react";
import { Redirect, Route } from "react-router-dom";
import { RouteComponentProps } from '@reach/router';
import { useSelector } from "react-redux";
import { selectIsAuth } from "src/redux/reducers/selectors/auth-selector";

interface RouteProps {
    path: string
  }
const ProtectedRoute: React.FC<any> = ({ component: Component, ...restOfProps }:any) => {
    
  // const isAuthenticated = localStorage.getItem("api_token");
  const isAuth = useSelector(selectIsAuth) || sessionStorage.getItem('token')
  return (
  <Route
      {...restOfProps}
      render={(props: any) =>
        isAuth ? 
        <Component {...props} /> 
        : <Redirect to="/login" />
      }
    />
  );
}
export default ProtectedRoute