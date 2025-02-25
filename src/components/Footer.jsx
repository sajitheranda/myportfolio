import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white text-center py-3" style={{ backgroundColor: '#00008B' }}>
      <p>&copy; {new Date().getFullYear()} Sajith Eranda. All rights reserved.</p>
      <p>
        <div className="social-icons">
          <a
            href="https://github.com/sajitheranda"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }} // GitHub black
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:sajitheranda227@gmail.com" style={{ color: "white"  }}>
            <FontAwesomeIcon icon={faEnvelope} /> {/* Gmail Red */}
          </a>
          <a href="tel:+94764477503" style={{ color: "white"  }}>
            <FontAwesomeIcon icon={faPhone} /> {/* WhatsApp Green */}
          </a>
          <a
            href="https://www.linkedin.com/in/sajith-eranda/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white"  }}
          >
            <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn Blue */}
          </a>
        </div>
      </p>
    </footer>
  );
};

export default Footer;