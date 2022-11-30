import style from "./css/ErrorMessage.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const ErrorMessage = ({message , onConfirm}) => {
  return (
    <div className={ message === '' ? style.none : style.visible }>
      <Card className={style.container}>
      <div className={style.title__container}>
        <p>Invalid Input</p>
      </div>

      <div className={style.message__container}>
        <p>{message}</p>
      </div>

      <div className={style.button__container}>
        <Button onSubmit={onConfirm}>
          Okay
        </Button>
      </div>

    </Card>
    </div>
  );
};

export default ErrorMessage;
