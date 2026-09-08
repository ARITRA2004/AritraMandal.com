import Skill from "./MySkills.js";
import "./Style.css";

const Skills = () => {
  return (
    <section className="skill-section">

            <div className="skill-heading">
                <span className="skill-subtitle">
                    MY EXPERTISE
                </span>

                <h1>Skills</h1>

                <p>
                    Technologies I use to build modern and scalable applications.
                </p>
            </div>

            <div className="skill-grid">

                {Skill.map((skill) => (
    <div className="skill-card" key={skill.id}>

        <div className={`skill-icon skill-${skill.nameforCss}`}>
            <img
                src={skill.icon}
                alt={skill.name}
            />
        </div>

        <div className="skill-info">
            <h2>{skill.name}</h2>
            <p>{skill.type}</p>
        </div>

    </div>
))}

            </div>

        </section>
  );
};

export default Skills;
