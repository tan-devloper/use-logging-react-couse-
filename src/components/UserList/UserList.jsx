import style from './css/UserList.module.css'
import Card from '../UI/Card/Card'
import User from '../User/User'

const UserList = (props) => {
  const Element = props.data.map(ele => <User key={ele.text} name={ele.text} age={ele.number}/>)

  return (
    <Card className={style.vw40}>
      {Element}
    </Card>
  )
}

export default UserList