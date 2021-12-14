import { useDispatch, useSelector } from "react-redux";
import { addMessageAction, addMessageWithThunk } from "../../Store/Messages/actions";
import { messageListSelector } from "../../Store/Messages/selectors";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import firebase from "firebase";
import { useEffect } from "react";

 export const MessageList = () => {
    const dispatch = useDispatch();
    const { messageList } = useSelector(messageListSelector);
    const { chatId } = useParams();
    

    const formSubmit = event => {
      event.preventDefault();
      const requst = {
        chatId,
        author: event.target.elements.author.value,
        text: event.target.elements.text.value
      };
      dispatch(addMessageAction(requst))
      dispatch(addMessageWithThunk({chatId}))
    };
    useEffect(() => {
      handleInitFirebaseMessage();
    }, []);

    const handleInitFirebaseMessage = async () => {
      const id = firebase.auth().currentUser.uid;
  
      await firebase
        .database()
        .ref("message")
        .child(id)
        .child("messages")
        .on("value", (snapshot) => {
          dispatch(addMessageAction({ requst: snapshot.val() }));
        });
    };
  
 

 /*   const formSubmit = (event) => {
      const db = firebase.database();
      const id = firebase.auth().currentUser.uid;
  
      db.ref("messages").child(id).child("message").set(event.target.value);
      
    }; */
    // запутался, не понял как лучше сделать реализацию, тоже полурабочая

    return (
      <main>   
        <form onSubmit={formSubmit} >
          <div>
            <TextField label="Введите автора" name="author" autoFocus/>
            <TextField label="Сообщение" name="text" />
          </div>
          <Button variant="contained" color="success" type="submit">Отправить</Button>
        </form>
        {messageList[chatId] && messageList[chatId].map((message, index) => 
          <div className="messages" key={index}>
            <div>
              <p>Автор: {message.author}</p>
              <p>Сообщение: {message.text}</p>
            </div>
          </div>
        )}
        
      </main>
    );
  };