import React, { useState } from "react";
import  "./index.css";
const Eventdemo=()=>{
    const CbgColor="green";
    const [cColor,uColor]=useState(CbgColor);
    const [cName,uName]=useState("My Color Is Green 😄");
    const ChangeColor=()=>{
        let newBg="yellow";
        uColor(newBg);
        uName("My Color is Yellow 😠");
    }
    return(
        <>
            <div className="text-cemnter"  style={{backgroundColor:cColor}}>
                <button className="btn" onDoubleClick={ChangeColor}>{cName}</button>
            </div>
        </>
    );
}
export default Eventdemo;