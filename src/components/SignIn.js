import styled from "styled-components";

import { auth, provider } from "../firebase";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "../features/userSlice";

import React from "react";

function SignIn() {
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
    <SignInComponent>
      {userName ? (
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      ) : (
        <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
      )}
    </SignInComponent>
  );
}

export default SignIn;
const SignInComponent = styled.div``;
const SignInButton = styled.button`
  border: none;
  color: #111;
  box-shadow: 0 0 2.5rem 2.5rem #bfe6ff inset, 0 0 0 0 #bfe6ff;
  transition: all 150ms ease-in-out;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;

  &:hover {
    box-shadow: 0 0 0.625rem 0 #bfe6ff inset, 0 0 0.625rem 0.25rem #bfe6ff;
    background-color: #bfe6ff;
  }
  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;
const SignOutButton = styled(SignInButton)``;
