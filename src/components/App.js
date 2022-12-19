import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line no-unused-vars
  const [userObj, setUserObj] = useState(null);
  // console.log(authService.currentUser);
  const refreshUser = () =>{
    // setUserObj(authService.currentUser);
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args)=> user.updateProfile(args),
    });
  };



  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        // setIsLoggedIn(user);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args)=> user.updateProfile(args),
        });
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);
  return (
    <>
    {init ? (
    <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} /> 
    ) : (
      "initializing..."
    )}
    {/* <footer>&copy; {new Date().getFullYear()} Nwitter</footer> */}
    </>
  );
}

export default App;
