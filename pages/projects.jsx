import React, { createContext, useState, useEffect} from 'react';
import Layout from '../components/Layout';

const GitHubContext = createContext();

const useGitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/WilsonFallasG/repos')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub projects:', error);
      });
  }, []);

  return projects;
};



const Projects = () => {
  const projects = useGitHubProjects();

  return (
    <Layout>
      <h1>Proyectos</h1>
      {projects.map(({ id, name }) => (
        <div key={id}>
          <img src="github.png" alt="GitHub Logo" width="200" height="200" />
          <h3>
            Id: {id}
            <br />
            Nombre: {name}
          </h3>
          <p>Proyecto GitHub</p>
        </div>
      ))}
    </Layout>
  );
};

export default Projects;



 
