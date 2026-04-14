import React from "react";
import "./journey.css";

export default function Journey() {
  const timeline = [
    {
      year: "2023",
      title: "Started Coding",
      desc: "Began learning HTML & CSS and explored web development.",
    },
    {
      year: "2024",
      title: "Frontend Developer",
      desc: "Built responsive websites using JavaScript, React & Bootstrap.",
    },
    {
      year: "2025",
      title: "Advanced Projects",
      desc: "Completed 30+ projects to strengthen my frontend skills.",
    },
    {
      year: "2026",
      title: "Full Stack Journey",
      desc: "Started learning backend with Node.js and APIs.",
    },
  ];

  return (
    <section className="journey">
      <h1><span>My Journey</span></h1>

      <div className="tree">

        {timeline.map((item, index) => (
          <div
            key={index}
            className={`branch ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="leaf">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}