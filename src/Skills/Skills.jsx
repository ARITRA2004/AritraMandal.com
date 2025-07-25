import Skill from "./MySkills.js";
import "./Style.css";

const Skills = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div
        className="skill-container"
      >
        <div>
          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Skills</h2>
        </div>
        {Skill.map((value) => {
          return (
            <div className="skill">
              <div className="skill-name">{value.name}</div>
              <div className="progress-bar">
                <div className={`progress ${value.nameforCss}`}>
                  {value.progress}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
