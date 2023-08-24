import React,{useEffect,useState}  from 'react';
import '../styles.css';

export default function Status() {
    const [statu,setstatu]=useState([]);
    useEffect(()=>{
      showstatus();
    
    },[]);

    const showstatus=async()=>{
      try{
       const abc=await fetch("http://localhost:8082/open/getinfo");
        const def=await abc.json();
        setstatu(def);

      }catch(error){console.log(error);}



   };

  return (
//     <div>
   
    
//       <table className='table'>
//   <thead>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">Name</th>
//       <th scope="col">cellno</th>
//       <th scope="col">Departure</th>
//       <th scope="col">Arrival</th>
//       <th scope="col"> payment status</th>
//     </tr>
//   </thead>
//   <tbody>
// {statu.map((ev)=>
 
//     <tr key={ev.id} >
//       <th scope="row" >{ev.id}</th>
//       <td  >{ev.name}</td>
//       <td  >{ev.cellno}</td>
//       <td  >{ev.startpoint}</td>
//       <td  >{ev.destination}</td>
//       <td  >{ev.payment}</td>
//     </tr>
//     )}
//     </tbody>


//     </table> 

//     </div>
<>
<table className='styled-table'>
        <caption>BOOKING STATUS</caption>
        <thead>
            <tr>
            <th scope="col">id</th>
       <th scope="col">Name</th>
    <th scope="col">cellno</th>
      <th scope="col">Departure</th>
      <th scope="col">Arrival</th>
      <th scope="col"> payment status</th>
            </tr>
        </thead>
        <tbody>
        {statu.map((ev)=>
 
     <tr key={ev.id} >
       <th scope="row" >{ev.id}</th>
       <td  >{ev.name}</td>
       <td  >{ev.cellno}</td>
       <td  >{ev.startpoint}</td>
       <td  >{ev.destination}</td>
       <td  >{ev.payment}</td>
     </tr>
     )}
        
        </tbody>
    </table>
</>
  );
}
