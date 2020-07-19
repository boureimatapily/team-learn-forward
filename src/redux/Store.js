import firebaseApp from "firebase/app";
import firebase from "../Config/fbconfig";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { verifyAuth } from "./Actions/authActions";
import rootReducer from "./Reducers/rootReducer";
import { reduxFirestore } from "redux-firestore";



let middleware = [applyMiddleware(reduxThunk)];

export default function store(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      compose(...middleware, reduxFirestore(firebaseApp, firebase))
    );
    store.dispatch(verifyAuth());
    return store;
  }

  