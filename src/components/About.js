// src/components/About.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faCuttlefish } from '@fortawesome/free-brands-svg-icons'; // for Python, Java, and C
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // for MySQL
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <div className="about-main">
          {/* Left Side: Introduction */}
          <div className="about-left">
            <p>
              Hi, I’m <strong>Manya Mehrotra</strong>, a third-year Computer Science student with a passion for coding, problem-solving, and exploring emerging technologies. I'm deeply interested in Machine Learning, Frontend Development, and Database Management.
            </p>
            <p>
              I’m a keen learner, and apart from development, I am also learning Data Structures and Algorithms (DSA) to enhance my problem-solving skills. I believe that learning never stops, and I strive to stay up to date with the latest trends in tech.
            </p>
            <p>
              In addition to my technical skills, I enjoy content writing, which helps me communicate complex ideas in a simple and effective manner.
            </p>
          </div>

          {/* Right Side: Skills */}
          <div className="about-right">
            <h2>Skills</h2>
            <div className="skills-bar">
              {/* Python */}
              <div className="skill">
                <FontAwesomeIcon icon={faPython} className="skill-icon" />
                <label>Python</label>
                <div className="percentage">90%</div>
                <div className="bar" style={{ width: "90%" }}></div>
              </div>
              {/* Java */}
              <div className="skill">
                <FontAwesomeIcon icon={faJava} className="skill-icon" />
                <label>Java</label>
                <div className="percentage">80%</div>
                <div className="bar" style={{ width: "80%" }}></div>
              </div>
              {/* C */}
              <div className="skill">
                <FontAwesomeIcon icon={faCuttlefish} className="skill-icon" />
                <label>C</label>
                <div className="percentage">80%</div>
                <div className="bar" style={{ width: "80%" }}></div>
              </div>
              {/* MySQL */}
              <div className="skill">
                <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                <label>MySQL</label>
                <div className="percentage">85%</div>
                <div className="bar" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;






