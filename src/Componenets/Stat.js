import React from 'react';
import '../styles.css';


export default function Stat(props) {
   
  return (
  
    <div>
           <div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm" style={{backgroundColor:"black",color:"white"}}>Bank name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"  style={{backgroundColor:"black",color:"white"}}>IFSC code:</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"  style={{backgroundColor:"black",color:"white"}}>PIN CODE:</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div className="input-group input-group-sm mb-3"><button onClick={props.paidfun}>pay-{props.price}</button></div>
<p></p>

    </div>
  )
}
