import "./styles.css";
import { Link } from "react-router-dom";

const WhoAMI = () => {
  return (
    <div
      className="intro-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        borderRadius: "15px",
        gap: "40px",
        marginTop: "120px",
        marginBottom: "130px",
      }}
    >
      <div className="intro-text">
        <h1 style={{ fontSize: "3rem", color: "#aaa", margin: "0" }}>
          This is,
        </h1>
        <h2 style={{ fontSize: "4rem", color: "#00ccff", margin: "10px 0" }}>
          Aritra Mandal
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#ddd" }}>
          Continuously learning Data Structures & Algorithms and enhancing
          skills in MERN full-stack development. Focused on building efficient,
          scalable web applications and exploring backend technologies to turn
          ideas into impactful digital solutions.
        </p>
        <div className="resume">
          <a href="/Aritra_CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="cv-button">Here is CV</button>
          </a>
        </div>
      </div>
      <div className="intro-image">
        <img
          style={{
            width: "280px",
            height: "320px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
            border: "2px solid #00ccff",
          }}
          src="./my-image.jpg"
          alt="Aritra Mandal"
        />
      </div>
    </div>
  );
};

export default WhoAMI;
