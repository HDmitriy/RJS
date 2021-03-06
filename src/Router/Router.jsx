import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { MessageList } from "../Components/MessageList/MessageList";
import { Cats } from "../Screens/Cats";
import { ROUTES } from "./constants";

const INIT_CHATS = { id1: { name: "chat1" } };

export const Router = () => {
  const [chatList] = useState(INIT_CHATS);
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
      </ul>
      

      <Switch>
        <Route exact path={ROUTES.CHAT}>
          <Chats chatList={chatList} />
        </Route>
        <Route exact path={ROUTES.CHATS}>
          <MessageList/>
        </Route>
        <Route exact path={ROUTES.PROFILE} component={Profile} />
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
        <Route path={ROUTES.NOT_FOUND}>404</Route>
        <Route exact path={ROUTES.CATS}>
          <Cats />
        </Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};