import React, { useState } from "react";
import "./contact.css";
import { FaGithub, FaLinkedin, FaTelegram, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields");
      setSuccess("");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Message sent successfully!");
    
    // reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <h1><span>Contact Me</span></h1>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p><FaEnvelope style={{ color: "#e49133" }}  /> yabget19@email.com</p>
          <p><FaPhone style={{color: "#e49133"  }} /> +251 961 983 411</p>
          <p><FaMapMarkerAlt style={{ color: "#e49133" }}  /> Addis Ababa, Ethiopia</p>

          <div className="socials">
            <a href="https://github.com/yeabget" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://t.me/" target="_blank" rel="noreferrer"><FaTelegram /></a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}