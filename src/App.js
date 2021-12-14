import React from "react";
import "./App.css";

import { auth, provider } from "./firebase";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    //function body
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        //action-payload
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  const handleSignOut = () => {
    //function body
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="App">
      {userName ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
      <h1>Hello</h1>
    </div>
  );
}

export default App;
