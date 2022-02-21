import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router";
import {projectService, userService} from "../../services";

function CreateProject(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [project, setProject] = useState({
    projectId: '',
    projectName: '',
    members: [],
    createdAt: new Date(),
    finishedAt: new Date()
  });
  const chosenMember = useRef();

  useEffect(async () => {
    const dataFromDatabase = await userService.getAllUsers();
    chosenMember.current = dataFromDatabase[0].username;
    console.log(chosenMember.current)
    setUsers(dataFromDatabase);
  },[]);

  return (
    <>
      <div className="container pt-5">
        <div className="w-50 border p-5 mx-auto">
          <div className="mb-3">
            <label htmlFor="projectId" className="form-label">ProjectId:</label>
            <input type="text" className="form-control" id="projectId" onChange={(e) => setProject({...project, projectId: e.target.value})}/>
          </div>
          <div className="mb-3">
            <label htmlFor="projectName" className="form-label">Project Name:</label>
            <input type="text" className="form-control" id="projectName"  onChange={(e) => setProject({...project, projectName: e.target.value})}/>
          </div>
          <div className="mb-3">
            <label htmlFor="createdAt" className="form-label">Created At:</label>
            <input type="date" className="form-control" id="createdAt"  onChange={(e) => setProject({...project, createdAt: e.target.value})}/>
          </div>
          <div className="mb-3">
            <label htmlFor="finishedAt" className="form-label">Finished At:</label>
            <input type="date" className="form-control" id="finishedAt"  onChange={(e) => setProject({...project, finishedAt: e.target.value})}/>
          </div>
          <div className="mb-3">
            <label htmlFor="members" className="form-label">Add Members:</label>
            <div className="d-flex">
              <select className="form-select me-2" id="members"  onChange={(e) => {
                chosenMember.current = e.target.value;
                console.log(chosenMember);
              }}>
                {
                  users.map(user => <option value={user.username}>{user.username}</option>)
                }
              </select>
              <button className="btn btn-success" onClick={(e) => {
                if(project.members.filter(member => member === chosenMember.current).length === 0){
                  const updatedProject = {...project};
                  updatedProject.members.push(chosenMember.current);
                  setProject(updatedProject);
                }
              }}>Add</button>
            </div>
          </div>
          <div className="mb-3">
            {
              project.members.map(member => <div className="badge bg-primary me-1">{member}</div> )
            }
          </div>

          <button className="btn btn-primary" onClick={async () => {
            await projectService.createProject(project);
            navigate("/projects");
          }}>Create Project</button>
        </div>
      </div>

    </>
  )
}

export default CreateProject;