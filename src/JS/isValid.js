export default function isValid(data , callback) {
  if (data.name === "" || data.name === undefined) {
    callback('User name should not be empty !🌹🔥')
    return false;
  }

  if (data.age === undefined || data.age === "") {
    callback('User age should not be empty or under 0 🌹🔥')
    return false;
  }

  return true;
}
