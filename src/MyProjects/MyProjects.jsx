import Projects from "./Projects.js";
import "./MyprojectStyle.css";

const MyProjects = () => {
  return (
    <div
      className="projects"
      style={{
        marginTop: "90px",
        backgroundLinearGradient: "(135deg, #111 60%, #1f1f1f 100%)",
      }}
    >
      <div
        style={{
          marginInline: "100px",
        }}
      >
        <h2 style={{ fontSize: "3rem", textAlign: "center" }}>Projects</h2>
      </div>
      <div
        className="all-projects"
        style={{
          display: "flex",
          borderRadius: "8px",
          marginTop: "60px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {Projects.map((value, _) => {
          return (
            <div class="card">
              <img
                src={value.src}
                alt={value.src}
              />
              <div class="card-content">
                <div class="card-title">{value.name}</div>
                <div class="card-text">
                  {value.desc}
                </div>
                <div class="tech-stack">
                  {
                    value.tech.map((value,_)=>{
                      return(
                        <span key={value.id}>{value}</span>
                      )
                    })
                  }
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
