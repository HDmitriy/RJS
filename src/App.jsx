
import { Provider } from "react-redux";
import { Router } from "./Router";
import { store } from "./Store";



const App = () => {
  return (
    <Provider store={store}>

        <Router />

    </Provider>
  );
};

export default App;



























/* import './App.css';
import { Message } from "./Message";
import { MessageList } from './messageList';
import { Chats } from './Chats';
import { Profile } from './Profile/Profile';


const homework = "HomeWork";

const App = () =>  {
  
  return (
    <div className="App">
      
      
        <Chats />
        <MessageList /> 
        <Message homework={homework}/>
    
    </div>
  );
};

export default App;
profile */