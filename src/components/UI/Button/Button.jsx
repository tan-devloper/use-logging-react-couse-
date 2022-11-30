import style from "./css/Button.module.css";

const Button = ({ content, onSubmit , children }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <button type="submit" className={style.button} onClick={clickHandler}>
      {content}
      {children}
    </button>
  );
};

export default Button;
