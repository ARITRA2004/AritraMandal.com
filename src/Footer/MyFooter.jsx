// import "./Footer.css";

const MyFooter = () => {
  return (
    <footer
      className="footer"
      style={{
        marginTop: "90px",
        textAlign: "center",
        padding: "16px",
        background: "linear-gradient(to right, #141E30, #243B55)",
        color: "#f1f1f1",
        fontSize: "16px",
        borderTop: "2px solid #00f7ff",
        boxShadow: "0 -2px 12px rgba(0, 0, 0, 0.4)",
        borderRadius: "8px 8px 0 0",
      }}
    >
      © 2025 Copyright by <span>Aritra Mandal</span>
    </footer>
  );
};

export default MyFooter;
