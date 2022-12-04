import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const {isLoggedIn, setIsLoggedIn} = useState(false);  // eslint-disable-line no-unused-vars
  return(
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>    // eslint-disable-line no-unused-vars
  );
};

export default AppRouter;