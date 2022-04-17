import React, { useState } from "react";


const Form_v=()=>{
    const [name,seName]=useState("");
    const [fNmae,setFname]=useState();
    const EventEork=(evnt)=>{
        seName(evnt.target.value);
    }
    const onSubmit =()=>{
        setFname(name)
    }

    return(<>


            <div className="text-cemnter">
                <h1>Hello {fNmae}</h1>
                <input type="text" placeholder="Enter the value " onChange={EventEork}
                    value={name}
                 />
                 <button onClick={onSubmit} className="btn">Submit</button>
            </div>
    </>);
}
export default Form_v;