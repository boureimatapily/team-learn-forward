import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
     auth:authReducer,
     firebase: firebaseReducer,
     firestore: firestoreReducer,
    });