import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import axios from "axios"
import ProjectManager from './components/projectManager'


const uriServer = "http://localhost:5500/projects";


axios.get(uriServer, JSON.stringify({}))
  .then((response) => {
    ReactDOM.render(<ProjectManager
      projectFetched={response.data}
    />, document.getElementById('root'));
  })


