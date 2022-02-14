import React from "react";
import { LoginContextConsumer } from "../login/loginContext";
import "../login/login.scss";
function UserPage(props) {
  return (
    <LoginContextConsumer>
    {context => 
      (
        <div className="user__body">
        <h2>User page</h2>
        <h3>Here are ur username and password</h3>
        <h4>{context.userData.username}</h4>
        <h4>{context.userData.password}</h4>
      </div>

    )}
  </LoginContextConsumer>
  );
}

export default UserPage;