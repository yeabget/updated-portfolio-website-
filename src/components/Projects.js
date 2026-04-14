import React from "react";
import "./projects.css";

import addis from "../Assets/assets/addis.jpg";
import fluent from "../Assets/assets/fluent.jpg";
import tigat from "../Assets/assets/tigat.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Addis Mart Landing Page",
      desc: "This project is a modern React landing page for Addis Mart, an online supermarket. The project demonstrates proficiency in React development, responsive design principles, and user experience optimization.",
      image: addis,
      live: "https://addissupermarket.netlify.app/",
      code: "https://github.com/yeabget/Addis-supermarket",
      

    },
    {
      title: "Fluent Online Courses",
      desc: "This project is a user interface for Fluent Online Courses, an e-learning platform. The project showcases skills in front-end development, UI/UX design, and creating intuitive interfaces for online learning platforms.",
      image: fluent,
      live: "https://fluent-online-courses.netlify.app/",
      code: "https://github.com/yeabget/fluent-online-courses",
      
    },
    {
      title: "Tigat Learning Platform",
      desc: "This project is an interactive course website for Tigat Learning Platform. It provides a user-friendly interface for students to access and engage with various learning materials. The project demonstrates skills in front-end development, responsive design, and creating engaging user interfaces for educational applications."
    ,
      image: tigat,
      live: "https://tigat-onlinelearnin-platform.netlify.app/",
      code: "https://github.com/yeabget/Tigat-Online-learning-platform",
    }
  ];

  return (
    <section className="projects">
      <h1><span>Projects</span></h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <img src={project.image} alt={project.title} />

            <div className="overlay">
              <h3><span>{project.title}</span></h3>
              <p>{project.desc}</p>

              <div className="buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}