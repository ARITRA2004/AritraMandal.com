import Projects from "./Projects.js";
import "./MyprojectStyle.css";

const MyProjects = () => {
  return (
    <div className="projects" style={{ marginTop: "90px" }}>
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="all-projects">
        {Projects.map((value, index) => {
          return (
            <div className="card" key={index}>
              <img src={value.src} alt={value.name} />

              <div className="card-content">
                <div className="card-title">{value.name}</div>

                <div className="card-text">{value.desc}</div>

                <div className="tech-stack">
                  {value.tech.map((tech, i) => {
                    return <span key={i}>{tech}</span>;
                  })}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
