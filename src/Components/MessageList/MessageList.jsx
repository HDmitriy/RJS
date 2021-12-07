import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




 export  const MessageList = () => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
  
    const handleChangeAuthor = event => {
      setAuthor(event.target.value);
    };
    const handleChangeText = event => {
      setText(event.target.value);
    };
    const handleClick = event => {
      setMessages([...messages, { author: author, text: text }]);
    };
    return (
      <main>
        
        <Button variant="contained" color="success" onClick={handleClick} >Отправить</Button>
        <div>
        <TextField id="outlined-basic" label="Введите автора" name="author" variant="outlined" onChange={handleChangeAuthor} autoFocus/>
        <TextField id="standard-basic" label="Сообщение" variant="standard" name="text" onChange={handleChangeText}/>
      

        </div>

        <div className="messages">
          
            {messages.map((text, i) => (
              <div key={i}>
                {" "}
                {text.author}: {text.text} {" "}
              </div>
            ))}
         
        </div>
      </main>
    );
  };