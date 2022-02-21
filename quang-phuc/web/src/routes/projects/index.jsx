import React, {useContext, useEffect, useState} from "react";
import DataContext from "../../contexts/data.context";
import {projectService} from "../../services";
import {useNavigate} from "react-router";
import ProjectCard from "../../components/project/ProjectCard";
import AddNewProjectCard from "../../components/project/AddNewProjectCard";

function Projects(props) {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isAllDataLoading, setIsAllDataLoading] = useContext(DataContext.context);
  const [isLoading, setIsLoading] = useState(false);

  async function getProjectFromDatabase() {
    setIsLoading(true);
    const dataFromDatabase = await projectService.getAllProjects();
    setProjects(dataFromDatabase);
    setIsLoading(false);
  }

  useEffect(async () => {
    await getProjectFromDatabase()
  },[]);

  if(!projects) return <></>;


  return (
    <>

      <div className="container mt-5">
        <div className="row">

          {
            isLoading ?(<div className="spinner-border mt-5 d-block mx-auto" role="status">
              <span className="visually-hidden"/>
            </div>) : (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <AddNewProjectCard />
                </div>
                {
                  projects.map(project => <div className="col-lg-4 col-md-6 col-sm-12"><ProjectCard project={project} /></div>)
                }
                </>

            )
          }

        </div>
      </div>
    </>
  );
}

export default Projects;