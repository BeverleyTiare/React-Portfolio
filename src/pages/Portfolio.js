import React from 'react';
import { Container } from "react-bootstrap";
//import image from '../assets/images/react-portfolio/public/images;


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1: Code Quiz',
      description: 'This Project focused on creating a timed quiz with multiple choice questions that also delineates information regarding high score outcomes. The quiz featured HTML and CSS powered by JS code.',
      image: '/images/Codequiz.png',
    },
    {
      id: 2,
      title: 'Project 2: Group Project 1',
      description: 'This project was aimed at providing scientific data on markers of climate change. The project featured HTML, CSS, JavaScript and APIs.',
      image: '/images/Grp Project1.png'
      
    },
    {
        id: 3,
        title: 'Project 3: Portfolio',
        description: 'This early project featured HTML and CSS, and was aimed at creating a portfolio of work.',
        image: '/images/Portfolio.png',
      },  
      {
        id: 4,
        title: 'Project 4: Work Day Scheduler',
        description: 'This Project is a simplistic color-coded calendar app that uses JQuery and Day.js, and that incorporates local storage: so allowing user to save and track events of the day per hour.',
        image: './images/Workdayscheduler.png',
      },
      {
        id: 5,
        title: 'Project 5: Employee Tracker',
        description: 'This command-line application manages employees by providing options to view, add, and update employee-related information, so to track departments, roles, and employees in your organization.',
        image: './images/EmployeeTracker.png',
      },
      {
        id: 6,
        title: 'Project 6: Weather Dashboard',
        description: 'This project featured developing a Weather Dashboard using HTML, CSS and JavaScript, that links to an external site to retrieve weather data for cities, across a 5-Day period. The application links to an API and uses local storage to store any persistent data, to thus allow the user to save and track weather data and events.',
        image: './images/WeatherDBD.png',
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
                <img className="portfolio__project-image" src={project.image} alt={project.title} />
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
