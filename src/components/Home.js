import React, { useState, useEffect } from "react";
import "./home.css";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";
import logo from "../Assets/port.png";
import About from "./About";
import Journey from "./Journey";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-container" id="home">
      <AnimatedBackground />
      <div className="home">
        <motion.div
          className="border"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="profile">
            <motion.img
              src={logo}
              alt="yeab"
              className="profile-pic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
        <motion.div
          className="info"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span>Yeabsira</span>
          </h1>

          <h3>Frontend Developer</h3>

          <p>
            I build modern, responsive, and visually appealing web applications.
            I focus on creating smooth user experiences with clean and efficient code.
          </p>

          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#">Download CV</a>
          </motion.button>
        </motion.div>

      </div>
      <section id="about">
        <About />
      </section>

      <section id="journey">
        <Journey />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
}   