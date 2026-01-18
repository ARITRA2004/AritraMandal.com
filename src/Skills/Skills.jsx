import Skill from "./MySkills.js";
import "./Style.css";

const Skills = () => {
  return (
    <div style={{ marginTop: "90px"}}>
      <div className="skill-container">
        <div>
          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Skills</h2>
        </div>
        <div class="timeline">
        {Skill.map((value, _) => {
          return (
              <div key={value.id} className="skill-item">
                <div className="skill-content">
                  <div className="skill-name">
                    {value.name}
                  </div>
                  <div className="skill-description">{value.desc}</div>
                  <div className="progress-bar">
                    <div className="progress" style={{width:"100%"}}></div>
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
