import style from './css/card.module.css';

export default function Card ({children ,className}) {
  return (
    <div className={style.container + ' ' + className }>{children}</div>
  )
}