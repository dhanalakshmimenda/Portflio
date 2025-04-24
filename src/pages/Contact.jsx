import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        .contact-section {
          background-color: #000;
          color: #fff;
          padding: 3rem 1.5rem;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #111;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
          animation: fadeInUp 0.8s ease forwards;
        }

        .contact-title {
          text-align: center;
          font-size: 2.5rem;
          color: #00bfff;
          margin-bottom: 0.5rem;
        }

        .contact-subtext {
          text-align: center;
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 2rem;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          background-color: #222;
          border: 1px solid #444;
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 1.25rem;
          font-size: 1rem;
          color: #fff;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #aaa;
        }

        .contact-form button {
          background-color: #00bfff;
          color: #000;
          font-size: 1rem;
          padding: 12px;
          width: 100%;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .contact-form button:hover {
          background-color: #1ecfff;
        }

        .success-message {
          text-align: center;
          color: #00ff90;
          font-weight: 500;
          font-size: 1.1rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtext">
            Let’s collaborate or chat! Fill out the form below.
          </p>

          {submitted ? (
            <p className="success-message">✅ Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              />
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
