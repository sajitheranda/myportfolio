import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../css/home.css"; // Import CSS for styling and animations


const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI/ML Engineer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTimeout(() => setSubIndex((prev) => prev - 1), 50);
      }
    } else {
      if (subIndex === roles[index].length + 1) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else {
        setTimeout(() => setSubIndex((prev) => prev + 1), 100);
      }
    }

    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
     <div className="container " >

      <br/><br/><br/><br/>   
      <div className="row align-items-center">
        {/* Left Column - Photo */}
        <div className="col-md-6 order-md-2 text-center">

        <div style={{ display: 'inline-block', padding: '10px', backgroundColor: 'orange', borderRadius: '50%' }}>
          <img
            src="/images/profile.png" // Replace with your photo URL
            alt="Sajith Eranda"
            style={{
              width: '300px', // Adjust size as needed
              height: '300px', // Adjust size as needed
              borderRadius: '50%', // Make the image circular
              border: '5px solid white', // Add a white ring
              objectFit: 'cover', // Ensure the image fits nicely
            }}
          />
        </div>
       
        </div>

        {/* Right Column - Content */}
        <div className="col-md-6 order-md-1">
        <h1 className="display-4">Hi, I'm <span className="name"><b>Sajith Eranda</b></span></h1>
        <h2 className="lead display-6">
          {text}
          <span className="cursor">{blink ? "|" : ""}</span>
        </h2>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/sajitheranda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#181717" }} // GitHub black
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:sajitheranda227@gmail.com" style={{ color: "#D44638" }}>
              <FontAwesomeIcon icon={faEnvelope} /> {/* Gmail Red */}
            </a>
            <a href="tel:+94764477503" style={{ color: "#25D366" }}>
              <FontAwesomeIcon icon={faPhone} /> {/* WhatsApp Green */}
            </a>
            <a
              href="https://www.linkedin.com/in/sajith-eranda/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077B5" }}
            >
              <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn Blue */}
            </a>
          </div>
          <div className="mt-3">
            <a href="/cv/my cv - sajith eranda.pdf" download="My_CV.pdf" className="btn btn-primary btn-lg">
              Download CV
            </a>
          </div>
        </div>

      </div>
      <br/><br/>  
    </div>
  );
};

export default Home;
