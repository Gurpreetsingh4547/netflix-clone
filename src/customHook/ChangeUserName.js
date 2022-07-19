import { useContext } from 'react'

// import userAuthentication context
import loginAuth from '../components/userAuthentication'

/**
 * creating custom hook for changing name
 * @params username
 */
const useChangeName = (username) => {
  // use userAuthentication context
  const userVerifiy = useContext(loginAuth)

  const { setUserName } = userVerifiy

  // function to update the name
  const handleUserName = () => {
    setUserName(username)
  }
  // return the function user
  return [handleUserName]
}

export default useChangeName
