import style from "./css/Form.module.css";

const Form = (props) => {

  const onChangeHandler = (e) => {
    props.onChange(e.target.value , props.type)
  }

  return (
    <div className={style.container }>
      <label >{props.title}</label>
      <input value={props.value} type={props.type} onChange={onChangeHandler}/>
    </div>
  );
};

export default Form;
