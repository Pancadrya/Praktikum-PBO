import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function LoginLogic() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const signInUser = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        // Handle sign-in error
      });
  };

  // const provider = new GoogleAuthProvider();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(setSignOut());
        navigate("/login");
      })
      .catch((error) => {
        // Handle sign-out error
      });
  };

  return {
    signInUser,
    signOutUser,
    userName,
    userPhoto,
  };
}

export default LoginLogic;
