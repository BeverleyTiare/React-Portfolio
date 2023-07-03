import React from "react";
import ProjectCard from './Components/ProjectCard';


function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h2>{props.name}</h2>
        </div>
        <div className="card-body">
          <p>{props.description}</p>
        </div>
        <div className="card-footer">
          <a href={props.github}>Github</a>
          <a href={props.deployed}>Deployed</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
