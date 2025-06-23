import Projects from "./Projects.js";

const MyProjects = () => {
  return (
    <div className="projects" style={{ marginTop: "90px", backgroundLinearGradient:"(135deg, #111 60%, #1f1f1f 100%)"
}}>
      <div
        style={{
        //   border: "2px solid blue",
          marginInline: "100px",
        }}
      >
        <h2 style={{fontSize:"3rem",textAlign:"center"}}>Projects</h2>
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
          gap: "10px",
          marginInline: "100px",
        }}
      >
        {Projects.map((value, _) => {
          return (
            <div
              style={{ borderRadius: "8px", overflow: "hidden",border:"2px solid #797474",height:"100%",width:"270px" }}
              key={value.id}
            >
              <div>
                <img width="100%" height="230px" src={value.src} alt="" />
              </div>
              <h2 style={{ padding: "8px", fontSize: "1.2rem",color:"#00ccff"}}>{value.name} <span></span></h2>
              <p style={{ padding: "8px",fontSize:"0.95rem",color: "#ccc"}}>{value.tech}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
