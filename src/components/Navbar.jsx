import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #0e0e0e 60%, #1a1a1a)", // gradient background
        borderBottom: "1px solid #333",
        position: "sticky",
        top: 0,
        zIndex: 10,
        color: "#00bfff",
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Title with Icon */}
        <h2 style={{ color: "#00bfff", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaBriefcase />
          Dhana Portfolio
        </h2>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
          {["about", "skills", "education", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                color: "#00bfff",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#fff")}
              onMouseOut={(e) => (e.target.style.color = "#00bfff")}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
