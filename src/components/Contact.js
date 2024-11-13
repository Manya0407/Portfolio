// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Link to CSS file for styling

function Contact() {
  return (
    <div className="contact-page" id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the platforms below:</p>
      <div className="contact-icons">
        <a href="mailto:manya.mehrotra@example.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://linkedin.com/in/manya-mehrotra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/manyamehrotra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Contact;


