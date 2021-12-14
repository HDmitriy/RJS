import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const PrivateRoute = ({ auth, ...rest }) =>
  auth ? <Route {...rest} /> : <Redirect to={ROUTES.SIGN_IN} />;