import React from "react";
import Slot from "./Slot";
import "./index.css"
// const Slot=(props)=>{
//   // let x=props.x;
//   // let y= props.y;
//   // let z=props.z;
//   // let x="😄";
//   // let y="😄";
//   // let z="😈";
//   let {x,y,z}=props;
//   if(x===y && y===z){
//     return(
//       <>
//         <div className="slotInner">
//           <h1>{x} {y} {z}</h1>
//           <h2>This is  Matching</h2>
//           <hr/>
//         </div>
//       </>
//     )
//   }else{
//         return(
//           <>
//               <div className="slotInner">
//           <h1>{x} {y} {z}</h1>
//           <h2>This is not Matching</h2>
//           <hr/>
//         </div>
//           </>
//         );
//     }

// }
const App =()=>{
  return(
    <>
      <h1 className="heding">🎰 Welome to <span style={{fontWeight:"bold"}}>Slote Mashine</span> 🎰</h1>
     <div className="slomasjne">

    
      <Slot x="😄" y="😄" z="😄"/>
      <Slot x="😄" y="🍌" z="🥭"/>
      <Slot x="😈" y="😄" z="😄"/>
      <Slot x="😄" y="🧑" z="😄"/>
      </div>
    </>
  );
}

export default App;