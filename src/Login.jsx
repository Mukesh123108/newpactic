import React, { useState } from "react";

const Login=()=>{
        const [fullName,setFullName]=useState({
            fName:"",
            lName:"",
            eMail:"",
        })
        
        const enterTheValue=(event)=>{
            const value=event.target.value;
            const name=event.target.name;
            setFullName((privis)=>{
                if(name==="fName"){
                    return{
                        fName:value,
                        lName:privis.lName,
                        eMail:privis.eMail
                    }
                   
                }else if(name==="lName"){
                    return{
                        lName:value,
                        fName:privis.fName,
                        eMail:privis.eMail
                    }
                }else if(name==="eMail"){
                    return{
                    eMail:value,
                    lName:privis.lName,
                    fName:privis.fName
                }

                }
            })
        }
        const submitForm=(event)=>{
            event.preventDefault();
        }
      return(
          <>
          <form onSubmit={submitForm}>
              <div className="text-cemnter">
                <h1>Hello  {fullName.fName} {fullName.lName}</h1>
                <h2>{fullName.eMail}</h2>
                <input type="text" name="fName" value={fullName.fName} onChange={enterTheValue}  />
                <br />
                <input type="text" name="lName" value={fullName.lName} onChange={enterTheValue} /><br/>
                <br />
                <input type="text" name="eMail" value={fullName.eMail} onChange={enterTheValue} /><br/>
                <button className="btn" type="submit">Submit</button>
 
              </div>
              </form>
          </>
      );
}
export default Login;