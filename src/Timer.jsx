import React, { useState } from "react";
import "./index.css";

const Timer=()=>{
    let CrentTime= new Date().toLocaleTimeString();
    const [cTime,UpdT]=useState(CrentTime);
    const UpdateTime=()=>{
        CrentTime= new Date().toLocaleTimeString();
        UpdT(CrentTime);

    }
    setInterval(UpdateTime,1000);
    return(
        <>
            <div className="text-cemnter">
                <h1>{cTime}</h1>
            </div>
        </>
    )
}
export default Timer;