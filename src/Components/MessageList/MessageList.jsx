import { useDispatch, useSelector } from "react-redux";
import { addMessageAction } from "../../Store/Messages/actions";
import { messageListSelector } from "../../Store/Messages/selectors";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

 export const MessageList = () => {
    const dispatch = useDispatch();
    const { messageList } = useSelector(messageListSelector);
    const { chatId } = useParams();

    const formSubmit = event => {
      event.preventDefault();

      console.log('chatId', chatId);
      console.log('messageList', messageList);

      const requst = {
        chatId,
        author: event.target.elements.author.value,
        text: event.target.elements.text.value
      };

      dispatch(addMessageAction(requst))
    };
    return (
      <main>   
        <form onSubmit={formSubmit} >
          <div>
            <TextField label="Введите автора" name="author" autoFocus/>
            <TextField label="Сообщение" name="text" />
          </div>
          <Button variant="contained" color="success" type="submit">Отправить</Button>
        </form>
        {messageList[chatId] ?
            <div className="messages">
              {messageList[chatId].map((message, i) => 
                <div key={i}>
                  <p>{message.author}</p>
                  <p>{message.text}</p>
                </div>
              )}
            </div>
        : ''}
        
      </main>
    );
  };