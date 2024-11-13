import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const textArray = [
    "I am a Coder",
    "I am a ML Enthusiast",
    "I am a Frontend Developer"
  ];

  const [currentText, setCurrentText] = useState(""); // Store current text being displayed
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Track which phrase we're on
  const [isDeleting, setIsDeleting] = useState(false); // Flag to indicate if we're deleting
  const [isTyping, setIsTyping] = useState(true); // Flag to indicate if we're typing

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setCurrentText((prevText) => prevText.slice(0, -1));
      } else {
        setCurrentText((prevText) =>
          textArray[currentTextIndex].slice(0, prevText.length + 1)
        );
      }

      if (!isDeleting && currentText.length === textArray[currentTextIndex].length) {
        setIsDeleting(true);
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }

      if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    }, isDeleting ? 100 : 200);

    return () => clearInterval(interval);
  }, [currentText, isDeleting, currentTextIndex]);

  return (
    <div className="home" id="home">
      <div className="home-content">
        <h1 className="portfolio-title">Welcome to my portfolio</h1>
        <h2 className="hi-text">Hi, I am Manya Mehrotra</h2>
        <div className="animated-text">
          {currentText}
        </div>
      </div>
      <div className="home-image">
        <div className="image-circle">
          <img src="/ss24.png" alt="Manya Mehrotra" className="profile-picture" /> {/* Image is now being sourced from public folder */}
        </div>
      </div>
    </div>
  );
}

export default Home;

