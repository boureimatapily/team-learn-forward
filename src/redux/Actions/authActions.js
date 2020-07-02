import firebase from "../../Config/fbconfig";
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

  export const loginUser = (email, password) => dispatch => {
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
  };

  export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
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
    myFirebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
      });
  };

  