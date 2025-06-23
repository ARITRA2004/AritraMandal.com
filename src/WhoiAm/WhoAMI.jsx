import "./styles.css";

const WhoAMI = () => {
  return (
    // <div>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row-reverse",
    //       marginTop: "80px",
    //       justifyContent: "space-evenly",
    //       alignItems: "center",
    //       marginInline:"100px",
    //       gap:"10%",
    //       textAlign:"justify",
    //       fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    //     }}
    //   >
    //     <div className="my-image">
    //       <img
    //         width="400px"
    //         style={{ borderRadius: "10px" }}
    //         src="./aritra.jpg"
    //         alt="my-image"
    //       />
    //     </div>
    //     <div>
    //       <p style={{textWrap:"wrap",fontFamily: "Poppins, sans-serif"}}>
    //         <span style={{fontSize:"80px"}}>This is,</span>
    //         <br />
    //         <span style={{fontSize:"70px"}}> Aritra Mandal</span> <br />
    //         <span style={{fontSize:"20px"}} >
    //         Continuously learning Data Structures & Algorithms and enhancing
    //         skills in MERN full‑stack development. Focused on building
    //         efficient, scalable web applications and exploring backend
    //         technologies to turn ideas into impactful digital solutions.
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div class="intro-container" style={{marginTop:"120px"}}>
    <div class="intro-text">
      <h1>This is,</h1>
      <h2>Aritra Mandal</h2>
      <p>
        Continuously learning Data Structures & Algorithms and enhancing skills in
        MERN full-stack development. Focused on building efficient, scalable web
        applications and exploring backend technologies to turn ideas into impactful
        digital solutions.
      </p>
    </div>
    <div class="intro-image">
      <img src="./aritra.jpg" alt="Aritra Mandal" />
    </div>
  </div>
  );
};

export default WhoAMI;
