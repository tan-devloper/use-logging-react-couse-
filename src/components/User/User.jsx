import Card from '../UI/Card/Card'

const User = (props) => {
  return (
    <Card>
      {props.name} ( {props.age} years old ) 
    </Card>
  )
}

export default User