import React from "react";
import ReactDOM from "react-dom";
// import {AuthenticationContextProvider} from "./context/authenticationContext"
import App from "./app.js"
import UserManager from "./components/userManager"
import { UserContextProvider } from "./context/userContext.js";

ReactDOM.render(
    // <AuthenticationContextProvider>
        <App/>
    // </AuthenticationContextProvider>
    , document.getElementById('root'));
// ReactDOM.render(
//     <UserContextProvider>
//         <UserManager
//         />
//      </UserContextProvider>
//     , document.getElementById('root'));


