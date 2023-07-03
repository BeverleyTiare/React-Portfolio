import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Beveley Tiare</h1>
      <h2>Web Developer</h2>

      <h3>Overview</h3>
      <p>
        TODO
      </p>
      <hr />

      <a
        className="button is-primary"
        href={process.env.PUBLIC_URL + "/BT-resume.pdf"}
        target="_blank"
        rel="noreferrer"
      >
        <span className="icon">
          <i className="fas fa-download"></i>
        </span>
        <span>Download My Resume</span>
      </a>

      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />

        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>TODO</li>
          <li>TODO</li>
        </ul>
      </div>

      <h3>Experience</h3>
      <h4>Web Developer | University of Sydney</h4>
      <p>2023 - Present</p>
      <ul>
        <li>TODO</li>
      </ul>

      <h3>Education</h3>
      <h4>Masters.Sc(Developmental Neuroscience) | XYZ University</h4>
      <h4>MRes(Cognitive Neuroscience)</h4>
      <h4>Master.Sc(Coaching Psychology)</h4>
    </div>
  );
};

export default Resume;
