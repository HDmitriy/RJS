
import { Message } from "../../Components/Message/Message";

import "./Home.css";

export const Home = () => {
  const homework = "homework";




  return (
    <div className="App">
      
      <Message homework={homework} />
        
    </div>
  );
};