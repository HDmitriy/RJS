import logo from './logo.svg';
import './App.css';
import { Message } from "./Message";
import { MessageList } from './messageList';
import { Chats } from './Chats';



function App() {
  
  const homework = "HomeWork";
  return (
    <div className="App">
      <header className="App-header">
      
        <Chats />
        <MessageList /> 
        <Message homework={homework}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
    </div>
  );
}

export default App;
