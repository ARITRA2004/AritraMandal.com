import Skill from "./MySkills.js";
import "./Style.css";

const Skills = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="skill-container">

        <h2 className="skills-heading">Skills</h2>

        <div className="timeline">
          {Skill.map((value, index) => {
            return (
              <div key={index} className="skill-item">
                <div className="skill-content">

                  <div className="skill-name">
                    {value.name} - {value.progress}%
                  </div>

                  <div className="skill-description">{value.desc}</div>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${value.progress}%` }}
                    ></div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;
