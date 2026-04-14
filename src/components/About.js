import React from 'react'
import './about.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiMysql } from "react-icons/si";
export default function About() {
  return (
    <div className='about-container'>
      <h1><span>About Me</span></h1>
      <div className='content'>
      <div className='about-content'>
        <p>
         I am a passionate Frontend Developer dedicated to building modern, responsive, and visually engaging web applications. I enjoy transforming ideas into interactive digital experiences. My focus is on creating clean, efficient code while ensuring that every interface is user-friendly, fast, and accessible across all devices. I pay close attention to design details, performance, and smooth interactions to deliver high-quality results.I am constantly learning and improving my skills by working on real-world projects and exploring new technologies. I am always excited to take on new challenges and collaborate on projects that push my abilities further.</p>
      </div>
      
       <div className="skill-container">
<h2>Skills</h2>
<div className="skills">
  <div className="skill">
    <FaHtml5 color="#E34F26" size={50} />
    <p>HTML</p>
  </div>

  <div className="skill">
    <FaCss3Alt color="#1572B6" size={50} />
    <p>CSS</p>
  </div>

  <div className="skill">
    <FaJs color="#F7DF1E" size={50} />
    <p>JavaScript</p>
  </div>

  <div className="skill">
    <FaReact color="#61DBFB" size={50} />
    <p>React</p>
  </div>

  <div className="skill">
    <FaNodeJs color="#339933" size={50} />
    <p>Node.js</p>
  </div>

  <div className="skill">
    <FaPython color="#3776AB" size={50} />
    <p>Python</p>
  </div>

  <div className="skill">
    <FaGitAlt color="#F05032" size={50} />
    <p>Git</p>
  </div>

  <div className="skill">
    <SiCplusplus color="#00599C" size={50} />
    <p>C++</p>
  </div>

  <div className="skill">
    <SiMysql color="#00758F" size={50} />
    <p>SQL</p>
  </div>

  <div className="skill">
    <FaJava color="#007396" size={50} />
    <p>Java</p>
  </div>

</div>
      </div>
      </div>
    </div>
  )
}
