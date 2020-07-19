import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// import { createFirestoreInstance } from "redux-firestore";
import Appstore from './redux/Store';



const theme = createMuiTheme();


// Wait For Auth To Load
// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth);
//   if (!isLoaded(auth))
//     return (
//       <div 
//       style={{
//         left: "50%",
//         right: "50%",
//         top: "40%",
//         position: "absolute"
//       }}>
//         Loading......
//       </div>
//     );
//   return children;
// }

const store = Appstore();


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
      <MuiThemeProvider theme={theme}>
        <Router>
          {/* <AuthIsLoaded> */}
            <App />
          {/* </AuthIsLoaded> */}
        </Router>
      </MuiThemeProvider>
    {/* </ReactReduxFirebaseProvider> */}
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
