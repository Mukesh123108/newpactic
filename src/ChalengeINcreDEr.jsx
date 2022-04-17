import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Clock from 'react-digital-clock';

const ChalengeINcreDEr=()=>{
    const [increment,setIncriment]=useState(0);
    const incriment=(event)=>{
        event.preventDefault();
        setIncriment(increment+1)
    }
    const Decrimednt=()=>{
        if(increment>0){
        setIncriment(increment-1)
    }else{
        alert("this not Drement");
    }
    }
    return(
        <>
     
            <div className="text-cemnter">
                <div className="mid">
                <h1 className="hedin">{increment}   <Clock /></h1>
                
                <Button variant="contained" type="submit" onClick={incriment}><AddIcon/></Button>  <Button  variant="contained" color="success" onClick={Decrimednt} type="submit"><DeleteForeverIcon/></Button>
              
                </div>  
            </div>
           
        </>
    )
}
export default ChalengeINcreDEr;