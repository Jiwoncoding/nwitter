import { authService } from "../fbase";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  // const history = useHistory();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    authService.signOut();
    // history.push("/");
    navigate('/');
  };

  return (
    <>
    <button onClick={onLogoutClick}>Log Out</button>
    </>
  );
};

export default Profile;