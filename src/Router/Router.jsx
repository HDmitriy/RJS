import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { MessageList } from "../Components/MessageList/MessageList";
import { Cats } from "../Screens/Cats";
import { ROUTES } from "./constants";
import { CircularProgress } from "@mui/material";
import firebase from "firebase";
import { SignIn } from "../Screens/SignIn";
import { SignUp } from "../Screens/SignUp";
import { PrivateRoute } from "../Components/PrivateRoute";
import { PublicRoute } from "../Components/PublicRoute";


const INIT_CHATS = { id1: { name: "chat1" } };

export const Router = () => {
  const [chatList] = useState(INIT_CHATS);
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const handleInitFirebaseAuth = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      setAuth(user);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleInitFirebaseAuth();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.CHAT}>Chats</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
          <Link to={ROUTES.CATS}>Cats</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign in</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </li>
      </ul>
      

      <Switch>
        <PrivateRoute exact path={ROUTES.CHAT} auth={auth}>
          <Chats chatList={chatList} />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.CHATS} auth={auth}>
          <MessageList/>
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.PROFILE} component={Profile} auth={auth}/>
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
        <PublicRoute exact path={ROUTES.SIGN_IN} auth={auth}>
          <SignIn />
        </PublicRoute>
        <PublicRoute exact path={ROUTES.SIGN_UP} auth={auth}>
          <SignUp />
        </PublicRoute>
        <Route path={ROUTES.NOT_FOUND}>404</Route>
        <Route exact path={ROUTES.CATS} auth={auth}>
          <Cats />
        </Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};