import React, { useState } from "react";

const ShortLogin =()=>{
    const [fullName,setFullname]=useState({
        fName:"",
        lName:""
    }
    )
    const EneterValue=(event)=>{
        const value=event.target.value;
        const name =event.target.name;
        setFullname((previs)=>{
            return{
                ...previs,
                [name]:value
            }
        })
    }
    const SUbmitTheValue=(event)=>{
        event.preventDefault();

    }
    return(
        <>
            <form onSubmit={SUbmitTheValue}>
            <div className="text-cemnter">
                <h1>{fullName.fName} {fullName.lName}</h1>
                <h2>{}</h2>
                <input type="text" placeholder="Enter The Name" name="fName" value={fullName.fName} onChange={EneterValue} /><br/>
                <input type="text" placeholder="Enter The Pass" name="lName" value={fullName.lName} onChange={EneterValue} />
                <br/>
                <button className="btn" type="submit"> Click</button>
            </div>
            </form>
        </>
    );
}
export default ShortLogin;