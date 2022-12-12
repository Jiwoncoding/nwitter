import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn, userObj}) => {
  return(
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
          <Route path="/" element={<Home userObj={userObj}/>} />
          <Route path="/profile">
            <Profile />
          </Route>
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        {/* <Navigate to="/" /> */}
      </Routes>
    </Router>    // eslint-disable-line no-unused-vars
  );
};

export default AppRouter;