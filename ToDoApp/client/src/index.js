import React from "react";
import ReactDOM from "react-dom";
import ProjectManager from "./components/projectManager/index.js";
import UserManager from "./components/userManager/userManager.js";
import './style.css'
import axios from "axios"


const uriServer = "http://localhost:5500/projects";

// ReactDOM.render(<UserManager/>, document.getElementById('root'));


// axios.post(uriServer, JSON.stringify({
//     projectName: 'DEMO',
//     taskList: [{ taskName: '1', isDone: false }, { taskName: '2', isDone: true }],
//     memberList: [{ memberName: 'a', isKicked: false, isLeader: true }, { memberName: 'b', isKicked: true, }],
//     isDeleted: false
// }))

axios.get(uriServer, JSON.stringify({}))
    .then((response) => {
        ReactDOM.render(<ProjectManager
            projectFetched = {response.data}
        />, document.getElementById('root'));
    })
