import React from "react";
const Slot=(props)=>{
    let {x,y,z}= props;
    if(x===y&& y===z){
            return(
                <>
                    <div className="slotInner">
                            <h1>{x} {y} {z}</h1>
                            <h2>This is Matching</h2>
                            <hr/>
                    </div>
                </>
            )
    }else{
        return(
            <>
                  <div className="slotInner">
                      <h1>{x} {y} {z}</h1>
                      <h2>This is not Matching</h2>
                      <hr/>
                  </div>
            </>
        )
    }
}
export default Slot;