const MyHeader = () => {
    return (
        <header style={{ display: "flex", position: "fixed", zIndex: "1", top: 0, left: 1, right: 1, background: "linear-gradient(to right, #141E30, #243B55)", height: "53px", borderBottom: "2px solid #00f7ff", borderRadius: "0 0 8px 8px" }}>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", marginInline: "20px" }}>
                <div className="Image">
                    <img width="30px" style={{ borderRadius: "50%", color: "white" }} src="/logo.png" alt="my-image" />
                </div>
                <div className="name" style={{ fontSize: "26px", fontWeight: "bolder", fontFamily:"Dancing Script" }}>Aritra Mandal</div>
            </div>
        </header>
    )
}

export default MyHeader;