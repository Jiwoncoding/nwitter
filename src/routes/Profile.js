import { authService, dbService } from "../fbase"; // eslint-disable-line no-unused-vars
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars

const Profile = ({userObj,refreshUser}) => { // eslint-disable-line no-unused-vars

  // const history = useHistory();
  const navigate = useNavigate();

  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onChange = (event) => {
    const {
      target: {value},
    }= event;
    setNewDisplayName(value);
  };

  const onLogoutClick = () => {
    authService.signOut();
    // history.push("/");
    navigate('/');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if(userObj.displayName !== newDisplayName){
      await userObj.updateProfile({displayName: newDisplayName});
      refreshUser();
    }
  };



  return (
    <>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
      <input type="submit" value="Update Profile" />
    </form>
    <button onClick={onLogoutClick}>Log Out</button>
    </>
  );
};

export default Profile;