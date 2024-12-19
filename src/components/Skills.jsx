import React from "react";

function Skills(){
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];
    return(
        <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
    )
}

export default Skills;