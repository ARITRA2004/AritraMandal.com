const MyHeader = ()=>{
    return(
        <header style={{display:"flex",position:"fixed",zIndex:"1",top:0,left:1,right:1, background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",height:"53px"}}>
            <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",marginInline:"20px"}}>
                <div className="Image">
                    <img width="30px" style={{borderRadius:"50%",color:"white"}} src="./logo.png" alt="my-image" />
                </div>
                <div className="name" style={{fontSize: "16px",fontWeight:"bolder"}}>Aritra Mandal</div>
            </div>
        </header>
    )
}

export default MyHeader;