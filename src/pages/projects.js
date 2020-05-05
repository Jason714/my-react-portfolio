import React from "react";
import Card from "../components/Card";
import projectData from "../components/projectData";
import "./project.css";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="project-page">
        <h3 className="text-center pt-4 header">Projects</h3>
        <hr />
        <div className="container project-container">
          <div className="row justify-content-md-center">
            <Card projectData={projectData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
