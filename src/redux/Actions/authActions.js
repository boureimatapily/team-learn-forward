import firebase from "../../Config/fbconfig";
import { reduxFirestore, getFirestore} from 'redux-firestore'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "../type";

const requestLogin = () => {
    return {
      type: LOGIN_REQUEST
    };
  };
  
  const receiveLogin = user => {
    return {
      type: LOGIN_SUCCESS,
      user
    };
  };
  
  const loginError = () => {
    return {
      type: LOGIN_FAILURE
    };
  };
  
  const requestLogout = () => {
    return {
      type: LOGOUT_REQUEST
    };
  };
  
  const receiveLogout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
  };
  
  const logoutError = () => {
    return {
      type: LOGOUT_FAILURE
    };
  };
  
  const verifyRequest = () => {
    return {
      type: VERIFY_REQUEST
    };
  };
  
  const verifySuccess = () => {
    return {
      type: VERIFY_SUCCESS
    };
  };

  export const loginUser = (email, password, onSuccess) => {
    return(dispatch)=>{
  
    dispatch(requestLogin());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(receiveLogin(user));
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(loginError());
      });
    }
    
  };

  export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(receiveLogout());
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
      });
  };

  export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
      });
  };

  export const Usersignup = (email,password, onSuccess)=>{

    return (dispatch,{getFirebase})=>{
      dispatch(verifyRequest());
        let firebase = getFirebase()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((user)=>{
                console.log(user)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const authenticateWithGoogle = (onSuccess)=>{
  return (dispatch, getState,{getFirebase})=>{
      let firebase = getFirebase()
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
          .auth().signInWithPopup(provider)
          .then((user)=>{
              console.log(user)
              onSuccess()
          })
          .catch((err)=>{
              console.log(err)
          })
  }
}