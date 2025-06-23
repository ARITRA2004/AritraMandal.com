import "./styles.css";

const WhoAMI = () => {
  return (
    <div className="intro-container" style={{ marginTop: "120px" }}>
      <div className="intro-text">
        <h1>This is,</h1>
        <h2>Aritra Mandal</h2>
        <p>
          Continuously learning Data Structures & Algorithms and enhancing
          skills in MERN full-stack development. Focused on building efficient,
          scalable web applications and exploring backend technologies to turn
          ideas into impactful digital solutions.
        </p>
      </div>
      <div className="intro-image">
        <img src="./aritra.jpg" alt="Aritra Mandal" />
      </div>
    </div>
  );
};

export default WhoAMI;
