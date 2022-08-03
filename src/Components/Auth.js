import React, { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../App';

const Auth = ({children}) => {
    const [loggedInUser] = useContext(UserContext);
    
  let location = useLocation();
  if (loggedInUser.isSignedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
  return children;
  }
    return <Navigate to="/login" state={{ from: location }} replace />;

};


export default Auth;