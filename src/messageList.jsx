import React, { useState, useEffect } from "react";
import "./messageList.css";



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
    console.log(messages);
    return (
      <main>
        <button className="message-button" onClick={handleClick}>Отправить</button>
        <div className="form">
          <input className="inputform"
            type="text"
            placeholder="Введите автора"
            name="author"
            onChange={handleChangeAuthor}
          />
          <input className="inputform"
            type="text"
            placeholder="Сообщение"
            name="text"
            onChange={handleChangeText}
          />
        </div>

        <div className="messages">
          
            {messages.map((x, i) => (
              <div key={i}>
                {" "}
                {x.author}: {x.text} {" "}
              </div>
            ))}
         
        </div>
      </main>
    );
  };
