/* import React, { useState} from "react" */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export  const Chatlist = () => {
  /*   const [messageList, setMessageList] = useState({
        messages: [
          { name: "name1", id: "id1" },
          { name: "name2", id: "id1" }
        ]
      }); */

    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'black'}}>
    {[1, 2, 3].map((value) => (
      <ListItem
        key={value}
        disableGutters
        secondaryAction={
          <Link to={`${ROUTES.CHAT}/id${value}`}>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Link>
        }
      >
        <ListItemText primary={`Chat id: ${value}`} />
      </ListItem>
    ))}
  </List> 
    );
  };