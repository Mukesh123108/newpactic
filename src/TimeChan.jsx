import React, { useState } from "react";
import "./index.css";

const TimeChan=()=>{
   let crentTIme= new Date().toLocaleTimeString();
   const [cTime,uDateTime]=useState(crentTIme);
   const UpDateT=()=>{
       crentTIme=new Date().toLocaleTimeString();
       uDateTime(crentTIme);
   }

    return(
        <>
        
            <div className="text-cemnter">
                <h1>{cTime}</h1>
                <button className="btn"  onClick={UpDateT}>Click</button>
            </div>

        </>
    );
}
export default TimeChan;