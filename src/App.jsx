import "./App.css";
import FormInput from "./components/FormInput/FormInput";
import UserList from "./components/UserList/UserList";
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

import { useState } from "react";

function App() {

  const [userList , updateUserList] = useState([])
  const [message , updateMassage] = useState('')

  const dataHandler = (object) => {
    updateUserList(preState => {
      return [object ,...preState ]
    })
  }
  
  const messageHandler = (message = '') => {
    updateMassage(message)
  }

  console.log(message);

  return (
    <div className="App">
      <FormInput message={messageHandler} submittedData={dataHandler}/>
      <UserList data={userList} />
      <ErrorMessage message={message} onConfirm={messageHandler}/>
      <div className={message === '' ? 'background' : 'background visible'  }>
      </div>
    </div>
  );
}
export default App;
