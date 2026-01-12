import React, { useState } from "react";

const HeroSection = () => {
  const [showFullName, setShowFullName] = useState(true);

  return (
    <section
      className="hero-box"
      onMouseOver={() => setShowFullName(true)}
      onMouseOut={() => setShowFullName(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="hero-text">
        <h1 className="hero-title">
          Hi, <br />
          I’m{" "}
          <span className="hero-name">
            {!showFullName ? "Ramsarup Singha Mahapatra" : "Ramsarup"}
          </span>
        </h1>

        <p className="hero-skills">Frontend Developer · React · JavaScript</p>

        <p className="hero-about">
          I build fast, responsive, and user-focused web applications.
        </p>
      </div>

      <div className="hero-image">
        <img src="/pic.jpeg" alt="Ramsarup" />
      </div>
    </section>
  );
};

export default HeroSection;
