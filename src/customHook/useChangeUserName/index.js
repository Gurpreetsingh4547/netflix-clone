import { useContext } from 'react';

// UserAuthentication context
import LoginAuth from '../../Context/userAuthentication';

/**
 * creating custom hook for changing name
 * @params username
 */
const useChangeName = (username) => {
  // use userAuthentication context
  const userVerifiy = useContext(LoginAuth);

  const { setUserName } = userVerifiy;

  // function to update the name
  const handleUserName = () => {
    setUserName(username);
  };
  // return the function user
  return [handleUserName];
};

export default useChangeName;
