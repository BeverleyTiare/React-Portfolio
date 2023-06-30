import React from 'react';
import { Container } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Code Quiz',
      imageUrl: 'https://example.com/project1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Work Day Scheduler',
      imageUrl: 'https://example.com/project2.jpg',
    },
    {
        id: 2,
        title: 'Project 3',
        description: 'SVG Logo Maker',
        imageUrl: 'https://example.com/project2.jpg',
      },  
      {
        id: 2,
        title: 'Project 4',
        description: 'Note taker',
        imageUrl: 'https://example.com/project2.jpg',
      },
      {
        id: 2,
        title: 'Project 5',
        description: 'Employee Tracker',
        imageUrl: 'https://example.com/project2.jpg',
      },
      {
        id: 2,
        title: 'Project 6',
        description: 'Regex Tutorial',
        imageUrl: 'https://example.com/project2.jpg',
      },
  ];

  return (
    <Container fluid>
      <Container>
        <section className="portfolio">
          <h2 className="portfolio__title">Portfolio</h2>
          <div className="portfolio__projects">
            {projects.map((project) => (
              <div className="portfolio__project" key={project.id}>
                <img className="portfolio__project-image" src={project.imageUrl} alt={project.title} />
                <h3 className="portfolio__project-title">{project.title}</h3>
                <p className="portfolio__project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Container>
  );
};

export default Portfolio;
