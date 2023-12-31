import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function Projects({ user }) {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/projects")
    .then((res) => res.json())
    .then((projects) => setProjects(projects))
  }, []);

  function addProject(newProject) {
    const updatedProjects = [...projects, newProject]
    setProjects(updatedProjects)
  }

  function handleDelete(id) {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects)
  }

  const createProjectCards = projects.map((data) => 
      <ProjectCard 
        key={data.id}
        name={data.name}
        date={data.date}
        user={data.user}
        link={data.link}
        id={data.id}
        onDelete={handleDelete}
      />
)

  return (

    <div>
      {/* <h3>View My Projects</h3> */}
      {/* <br/> */}
      {/* <hr/> */}
      <br/>
      <ProjectForm user={user} addProject={addProject} />
      <br/>
      {/* <hr/> */}
      {createProjectCards}
    </div>
    
  )
}

export default Projects;