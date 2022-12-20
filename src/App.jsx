import "./App.css";
import FormInput from "./components/FormInput/FormInput";
import UserList from "./components/UserList/UserList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ReactDOM from "react-dom";
import { useState } from "react";
function App() {
  const [userList, updateUserList] = useState([]);
  const [message, updateMassage] = useState("");

  const dataHandler = (object) => {
    updateUserList((preState) => {
      return [object, ...preState];
    });
  };

  const messageHandler = (message = "") => {
    updateMassage(message);
  };
  const BackDrop = ({ message }) => {
    return (
      <>
        <div
          className={message === "" ? "background" : "background visible"}
        ></div>
      </>
    );
  };
  console.log(message);

  const Modal = ({ message }) => {
    return <ErrorMessage message={message} onConfirm={messageHandler} />;
  };

  return (
    <div className="App">
      <FormInput message={messageHandler} submittedData={dataHandler} />
      <UserList data={userList} />

      {ReactDOM.createPortal(
        <Modal message={message} />,
        document.getElementById("root-modal")
      )}

      {ReactDOM.createPortal(
        <BackDrop message={message} />,
        document.getElementById("root-backdrop")
      )}
    </div>
  );
}
export default App;
