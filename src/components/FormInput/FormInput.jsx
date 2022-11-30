import { useState } from "react";
import style from "./css/FormInput.module.css";
import Card from "../UI/Card/Card";
import Form from "../Form/Form";
import Button from "../UI/Button/Button";

import isValid from "../../JS/isValid";

const FormInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState();

  const setInput = (data, type) => {
    if (type === "text") {
      setUserName(data);
    }

    if (type === "number") {
      setUserAge(data);
    }
  };

  
  function callbackHandler (message) {
    props.message(message)
  }

  const submitHandler = () => {

    // isValid (object , callback)


    if (isValid({name : userName , age : userAge}, callbackHandler)) {
      props.submittedData({text : userName , number :userAge})

      setUserName("");
      setUserAge("");
    }
  };

  
  return (
    <Card className={style.w40}>
      <Form
        value={userName}
        key="text"
        type="text"
        title="User Name"
        onChange={setInput}
      />
      <Form
        value={userAge}
        key="number"
        type="number"
        title="User Age"
        onChange={setInput}
      />
      <Button content="Add User " onSubmit={submitHandler} />
    </Card>
  );
};

export default FormInput;
