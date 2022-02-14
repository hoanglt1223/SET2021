import React, {useState, useEffect} from "react";
import { LogInContextConsumer } from "../login/loginContext";
import "../login/login.scss";
import axios from "axios"


const uriServer = "https://fortnite-api.theapinetwork.com/upcoming/get";


function Test(props) {
   axios.get(uriServer, JSON.stringify({}))
    .then((response) => {
        console.log(response.data)
    })


  // useEffect(()=>{
  //   fetchItems();
  // }, []);

  // const fetchItems = async () => {
  //   const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
  //   console.log(data)
  // }

  return (
    <LogInContextConsumer>
    {context => 
      (
        <div className="user__body">
        <h2>User page</h2>
        <h3>Here are ur username and password</h3>
        <h4>{context.userData.username}</h4>
        <h4>{context.userData.password}</h4>
      </div>

    )}
  </LogInContextConsumer>
  );
}

export default Test;