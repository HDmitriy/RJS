import { useDispatch, useSelector } from "react-redux";

import { addChatAction, removeChatAction } from "../../Store/Chats/actions";
import { chatListSelector } from "../../Store/Chats/selectors";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Chatlist = () => {
    const dispatch = useDispatch();
    const { chatList } = useSelector(chatListSelector);
    let name = '';

    const setChatName = event => {
      name = event.target.value;
    }

    const addChat = () => {
      if (name.length === 0) return;
      dispatch(addChatAction(name))
    };  

    /* 
    const addChat = () => {
      dispatch(handleInitFirebaseChats(chatListSelector))
    };  

    const handleInitFirebaseChats = async () => {
      const id = firebase.auth().currentUser.uid;
  
      await firebase
        .database()
        .ref("chats")
        .child(id)
        .child("name")
        .on("value", (snapshot) => {
          dispatch(addChatAction({ name: snapshot.val() }));
        });
    };
  
 

    const setChatName = (event) => {
      const db = firebase.database();
      console.log(name);
      const id = firebase.auth().currentUser.uid;
  
      db.ref("chats").child(id).child("Chatname").set(event.target.value);
    }; */


    // Отправляет и сохраняет чат в дб, но не могу его нормально отрисовать

    return (
      <div>
        <TextField placeholder='Введите название чата' type="text" onChange={setChatName} />
        <Button variant="contained" color="success" onClick={addChat}>ADD CHAT</Button>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'black'}}>
          {chatList && chatList.map((value) => (
            <ListItem
              key={value.id}
              disableGutters
              secondaryAction={
                <IconButton onClick={() => {
                  dispatch(removeChatAction(value.id))
                }}>
                  <DeleteIcon  />
                </IconButton>
              }
            >
              <ListItemText primary={`Chat №: ${value.name}`} />
              <Link to={`${ROUTES.CHAT}/id${value.id}`}>
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
              </Link>
            </ListItem>
          ))}
        </List> 
    </div>
    );
  };