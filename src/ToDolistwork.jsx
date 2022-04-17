import React from "react";
const ToDolistwork=(props)=>{


    return ( <div className="todoDel">
    <i className="fa fa-times" aria-hidden="true" onClick={()=>{
        props.onSelect(props.id)
    }}></i>
    <li>{props.text}</li>  
    </div>
    )
    
          
}
export default ToDolistwork;