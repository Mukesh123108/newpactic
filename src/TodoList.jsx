import React, { useState } from "react";
import ToDolistwork from "./ToDolistwork";
const TodoList=()=>{
const [product,setProduct]=useState("");
const [inputPro,setInputpr]=useState([]);
const EnterValue=(event)=>{
    setProduct(event.target.value);
}
const sumbmitF=(event)=>{
    event.preventDefault();
    setInputpr((oldItems)=>{
        return[...oldItems,product];
        
    })
    setProduct("");
}
const delItem=(id)=>{
    console.log(delItem);
    setInputpr((oldItems)=>{
       return oldItems.filter((arry,index)=>{
                return index !==id
        })
        
    })
}

    return(
        <>
        <form onSubmit={sumbmitF}>
            <div className="text-cemnter">
                <div className="mid">
                <h1 className="hedin">Add Items</h1>
                <input type="text" className="inpuBo " value={product} placeholder="Add a Items" onChange={EnterValue} />
                <button className="byname" type="submit">+</button>
                <ol>
                    {/* <li>{inputPro}</li> */}
                  {  inputPro.map((itemVal, index)=>{
                   
                    return( 
                        <>
                       
                     <ToDolistwork
                      text={itemVal}
                        key={index}
                        id={index}
                        onSelect={delItem}
                      />
                     
                      </>
                      )
                  })}
                </ol>
                </div>  
            </div>
            </form>
        </>
    )
}
export default TodoList;