import { useRef } from "react";
import style from "./css/FormInput.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import isValid from "../../JS/isValid";

const FormInput = (props) => {
  const ageInputRef = useRef();
  const nameInputRef = useRef();

  function callbackHandler(message) {
    props.message(message);
  }



  const submitHandler = () => {
    const userName = nameInputRef.current.value
    const userAge = ageInputRef.current.value
    // isValid (object , 
      // callback)
    if (isValid({ name: userName, age: userAge }, callbackHandler)) {
      props.submittedData({ text: userName, number: userAge });
    }
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  return (
    <Card className={style.w40}>
      <div className={style.container}>
        <label>User Name</label>
        <input ref={nameInputRef} />
      </div>

      <div className={style.container}>
        <label>User Age</label>
        <input ref={ageInputRef} />
      </div>
      <Button content="Add User " onSubmit={submitHandler} />
    </Card>
  );
};

export default FormInput;
