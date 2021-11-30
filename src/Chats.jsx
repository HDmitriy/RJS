import React, { } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import { Profile } from "./Profile/Profile";
import { Chat } from "./Chat/Chat";

const ROUTES = {
    HOME: '/',
    PROFILE: '/profile',
    CHAT: '/chat',
  };

export const Chats = () => {
    return <div>  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'black'}}>
    {[1, 2, 3].map((value) => (
      <ListItem
        key={value}
        disableGutters
        secondaryAction={
          <IconButton>
            <CommentIcon />
          </IconButton>
        }
      >
        <ListItemText primary={`Line item ${value}`} />
      </ListItem>
    ))}
  </List> 
        <BrowserRouter>
            <ul>
                <li><Link to = {ROUTES.HOME}>HOME </Link></li>
                <li><Link to = {ROUTES.PROFILE}>PROFILE </Link></li>
                <li><Link to = {ROUTES.CHAT}> CHAT </Link></li>

            </ul>
            <Routes>
               
                <Route path = {ROUTES.PROFILE} render={() => <Profile/>}> </Route>
                <Route path = {ROUTES.CHAT} element={<Chat />} ></Route>

                <Route path = {ROUTES.HOME}> </Route>
                <Route>Not found  404 </Route>
                    
                
            </Routes>
        </BrowserRouter>
  </div>;

};

