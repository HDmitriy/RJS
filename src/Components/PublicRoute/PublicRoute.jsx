import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const PublicRoute = ({ auth, ...rest }) =>
  !auth ? <Route {...rest} /> : <Redirect to={ROUTES.PROFILE} />;