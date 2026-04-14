import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;

        if (scrollY >= offset && scrollY < offset + height) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-navbar">
      <div className="navbar">

        {/* TOP BAR */}
        <div className="top-nav">
          <div className="logo">
            <h1>YEAB</h1>
          </div>

          <div
            className="menu-icon"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div className={`nav-links ${open ? "active" : ""}`}>

          <a
            className={active === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>

          <a
            className={active === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>

          <a
            className={active === "journey" ? "active" : ""}
            onClick={() => scrollToSection("journey")}
          >
            Journey
          </a>

          <a
            className={active === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>

          <a
            className={active === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>

        </div>

      </div>
    </div>
  );
}