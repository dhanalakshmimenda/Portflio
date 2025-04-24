import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer {
          position: relative;
          color: #fff;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow: hidden;
        }

        .footer-wave-background {
          background: linear-gradient(135deg, #0e0e0e 60%, #1a1a1a);
          position: relative;
          padding: 2rem 1rem 1rem;
        }

        .wave-svg-top,
        .wave-svg-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 150px;
        }

        .wave-svg-top {
          top: 0;
          transform: translateY(-100%);
        }

        .wave-svg-bottom {
          bottom: 0;
        }

        .footer-content {
          max-width: 400px; /* Reduced from 800px */
          margin: 0 auto;
          z-index: 2;
          position: relative;
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #00bfff;
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .footer-icons a {
          color: #00bfff;
          font-size: 1.8rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-icons a:hover {
          color: #00ffff;
          transform: scale(1.2) rotate(5deg);
        }

        .footer-note {
          font-size: 0.95rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .scroll-to-top {
          position: absolute;
          right: 1.5rem;
          bottom: 1.5rem;
          background-color: #00bfff;
          color: #0e0e0e;
          padding: 0.5rem;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease;
          box-shadow: 0 0 10px rgba(0,255,255,0.2);
          z-index: 2;
        }

        .scroll-to-top:hover {
          background-color: #00ffff;
        }

        @media (max-width: 768px) {
          .footer-note {
            font-size: 0.85rem;
          }

          .footer-icons a {
            font-size: 1.5rem;
          }

          .scroll-to-top {
            right: 1rem;
            bottom: 1rem;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Top Wave */}
        <div className="wave-svg-top">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path
              fill="#0e0e0e"
              d="M0,192L80,176C160,160,320,128,480,122.7C640,117,800,139,960,138.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>
        </div>

        {/* Footer Content */}
        <div className="footer-wave-background">
          <div className="footer-content">
            <div className="footer-logo">menda dhanalakshmi</div>
            <div className="footer-icons">
              <a href="mailto:your.dhanalakshmimenda15@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://github.com/dhanalakshmimenda" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
            <div className="footer-note">
              &copy; {new Date().getFullYear()} menda dhanalakshmi. All rights reserved.
            </div>
          </div>

          {/* Scroll to top */}
          <div className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="wave-svg-bottom">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path
              fill="#1a1a1a"
              d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
