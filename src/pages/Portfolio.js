import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1: Code Quiz',
      link:  'https://beverleytiare.github.io/challenge-4-quiz/yTiare/challenge-4-quiz',
      deployedLink: 'https://beverleytiare.github.io/challenge-4-quiz/',
      description: 'This Project focused on creating a timed quiz with multiple choice questions that also delineates information regarding high score outcomes. The quiz featured HTML and CSS powered by JS code.',
      image: './images/Codequiz.png',
    },
    {
      id: 2,
      title: 'Project 2: Group Project 1',
      link: 'https://github.com/HelmOar/project-1-group-1',
      deployedLink: 'https://helmoar.github.io/project-1-group-1/',
      description: 'This project was aimed at providing scientific data on markers of climate change. The project featured HTML, CSS, JavaScript and APIs.',
      image: './images/Grp Project1.png'

    },
    {
      id: 3,
      title: 'Project 3: Portfolio',
      link: 'https://github.com/BeverleyTiare/Challenge-2-Portfolio',
      deployedLink: 'https://beverleytiare.github.io/Challenge-2-Portfolio/',
      description: 'This project featured HTML and CSS, and was aimed at creating a portfolio of work.',
      image: './images/Portfolio.png',
    },
    {
      id: 4,
      title: 'Project 4: Work Day Scheduler',
      link: 'https://github.com/BeverleyTiare/challenge-5-work-day-scheduler',
      deployedLink: 'https://beverleytiare.github.io/challenge-5-work-day-scheduler/',
      description: 'This Project is a simplistic color-coded calendar app that uses JQuery and Day.js, and that incorporates local storage: so allowing user to save and track events of the day per hour.',
      image: './images/Workdayscheduler.png',
    },
    {
      id: 5,
      title: 'Project 5: Employee Tracker',
      link: 'https://github.com/BeverleyTiare/Challenge-Employee-Tracker',
      video: 'https://drive.google.com/file/d/10CLmGLZWzOvoQ3XIqKm_PriM0z8tQFJK/view',
      description: 'This command-line application manages employees by providing options to view, add, and update employee-related information, allowing you to track departments, roles, and employees in your organization.',
      image: './images/EmployeeTracker.png',
    },
    
    {
      id: 6,
      title: 'Project 6: Weather Dashboard',  
      deployedLink: 'https://beverleytiare.github.io/challenge-6-weather/',
      link:'https://github.com/BeverleyTiare/challenge-6-weather',
      description: 'This project featured developing a Weather Dashboard using HTML, CSS and JavaScript, that links to an external site to retrieve weather data for cities, across a 5-Day period. The application links to an API and uses local storage to store any persistent data, to thus allow the user to save and track weather data and events.',
      image: './images/Weather DBD.png',
    },
  ];

  return (
    <Container fluid>
      <Container>
        <h1 style={{ marginTop: 20, fontSize: "2.1em", paddingBottom: "20px" }}>
          Portfolio
        </h1>
        <section className="portfolio">
          <div className="portfolio__projects">
            <Row>
              {projects.map((project) => (
                <Col xs={12} md={6} lg={4}>
                  <div className="portfolio__project" key={project.id}>
                    <img className="portfolio__project-image" src={project.image} alt={project.title} />
                    <h6 className="portfolio__project-title mt-2">{project.title}</h6>
                    <a href={project.link} style={{marginRight: 12}} className="portfolio__link">Github</a>
                    <a href={project.deployedLink} className="portfolio__link">Live App</a>
                    <p style={{marginTop: 10, marginBottom: 50}} className="portfolio__project-description">{project.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </Container>
    </Container>
  );
};

export default Portfolio;
