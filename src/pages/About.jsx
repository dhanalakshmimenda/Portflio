import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../App.css";

const About = () => {
  const finalText = "Aspiring Java Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (isTyping) {
        if (index < finalText.length) {
          setDisplayedText((prev) => prev + finalText[index]);
          setIndex(index + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else {
          setIsTyping(true);
        }
      }
    }, 150);

    return () => clearInterval(textInterval);
  }, [index, isTyping, finalText]);

  return (
    <>
      <style>{`
        .about-section {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          padding: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .left-side {
          flex: 1;
          min-width: 300px;
          margin-right: 1.5rem;
        }

        .right-side {
          flex: 1;
          min-width: 250px;
          display: flex;
          justify-content: center;
          margin-left: 1.5rem;
        }

        .profile-image {
          max-width: 250px;
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #00bfff;
          box-shadow: 0 0 20px rgba(0, 191, 255, 0.7);
          animation: pulseBorder 2s infinite ease-in-out;
          transform: translateY(-50px);
        }

        @keyframes pulseBorder {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(0, 191, 255, 0.1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 191, 255, 0);
          }
        }

        .black-text {
          font-size: 2rem;
          font-weight: 600;
        }

        .pink-text {
          color: #00bfff;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .social-icons a {
          color: #00bfff;
          font-size: 1.8rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icons a:hover {
          color: #000;
          transform: scale(1.2);
        }

        .download-btn {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.6rem 1.2rem;
          background-color: transparent;
          border: 2px solid #00bfff;
          color: #00bfff;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .download-btn:hover {
          background-color: #00bfff;
          color: #000;
        }

        p {
          line-height: 1.6;
          margin-top: 1rem;
        }
      `}</style>

      <div id="about" className="about-section">
        <div className="left-side">
          <h1 className="black-text">Hi, I am</h1>
          <h1 className="black-text">Menda Dhanalakshmi</h1>
          <h2>
            I am an <span className="pink-text">{displayedText}</span>
          </h2>
          <p>
            I am a passionate Java developer with a solid foundation in object-oriented programming.
            I enjoy building scalable and efficient applications that solve real-world problems.
            Eager to join an organization that encourages continuous learning and innovation.
            Available for immediate hiring and ready to contribute from day one.
            I strive to grow both technically and professionally while making a meaningful impact.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/dhanalakshmimenda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-twitter-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Resume Download Button */}
          <a href="/RESUME2.pdf" download className="download-btn">
            Download Resume
          </a>
        </div>

        <div className="right-side">
          <img src="/dhana2.jpeg" alt="Profile" className="profile-image" />
        </div>
      </div>
    </>
  );
};

export default About;
