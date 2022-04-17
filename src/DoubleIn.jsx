import React, { useState } from "react";

const Doublein=()=>{
    const [name,setName]=useState("");
    const [Sname,setSname]=useState();
    const [mPass,setMpass]=useState("");
    const [myPass,setMyPass]=useState();
    const usePass=(event)=>{
            setMpass(event.target.value);
    }

    const UserInput=(event)=>{
        setName(event.target.value);
    }
    const subMit=(event)=>{
        event.preventDefault();
        setSname(name);
        setMyPass(mPass); 
    }
    return(
        <>
        <div className="text-cemnter">
        <form onSubmit={subMit}>
            <h1>Hello {Sname} {myPass}</h1>
            <input type="text" placeholder="Enter the User Name" value={name} onChange={UserInput}/>
          <br/>
              <input type="text" placeholder="Enter the Pasworld" value={mPass} onChange={usePass}/>
           <br/> <button type="submit" className="btn">Submit</button>
            </form>
        </div>
        </>
    )
}
export default Doublein;