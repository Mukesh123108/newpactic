import React, { useState } from "react";



const Rhook=()=>{
    const Stae=useState();
    const [Contin,Ucont]=useState(2)
    const cont=()=>{
        Ucont(Contin-1)
    }
    return(
            <>
            <div className="text-cemnter">
                <h1>{Contin}</h1>
                <button onClick={cont} className="btn">Click</button>
                </div>
            </>
    );
}
export default Rhook;