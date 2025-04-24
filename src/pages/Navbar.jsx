import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; // ⬅️ Import GitHub icon

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#00246B",
        borderBottom: "1px solid #333",
        position: "sticky",
        top: 0,
        zIndex: 10,
        color: "white",
      }}
    >
      <h2 style={{ color: "white" }}>Dhana Portfolio</h2>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>About</Link>
          <Link to="/skills" style={{ color: "white", textDecoration: "none" }}>Skills</Link>
          <Link to="/education" style={{ color: "white", textDecoration: "none" }}>Education</Link>
          <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </div>

        {/* GitHub Icon Link */}
        <a
          href="https://github.com/dhanalakshmimenda"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
