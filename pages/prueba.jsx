import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';

const Projects = () => {
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

  return (
    <div className="container mt-4 text-center">
      <h1>Proyectos de GitHub</h1>
      <Carousel className="w-50 mx-auto">
        
        {projects.map(({ id, name, description, html_url }) => (
          <Carousel.Item key={id}>
            <img src="github.png" alt="GitHub Logo" className="d-block w-100" />
            <Carousel.Caption>
              <h3 className="text-primary">{name}</h3>
              <p>{description}</p>
              <a href={html_url} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
