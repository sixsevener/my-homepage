import React from "react";

function Projects(){
    const projects = [];
    return(
        <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
    )
}

export default Projects;