import React from "react";
import ReactDOM from "react-dom";
import ProjectManager from "./components/projectManager/index.js";
import UserManager from "./components/userManager/userManager.js";
import './style.css'
import axios from "axios"


const uriServer = "http://localhost:5500";

ReactDOM.render(<ProjectManager />, document.getElementById('root'));
// ReactDOM.render(<UserManager/>, document.getElementById('root'));


axios.get(uriServer)


