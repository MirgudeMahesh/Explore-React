import React, { useState } from 'react';
import '../styles.css';
import {Link} from "react-router-dom";
import {useEffect} from 'react';
import Stat from './Stat';


export default function Phase() {
 const[res,setres]=useState('saveinfo')
  const [city,setcity]=useState('');
  const [loading,setloading]=useState(false);
    
    const [city1,setcity1]=useState('');
    const [name1,setname1]=useState('select');
    const [price,setprice]=useState('100');
    const [no1,setno1]=useState('');
   const[spoint,setspoint]=useState([]);
    const [dpoint,setdpoint]=useState([]);
    const [pay,setpay]=useState("Pending");
    const[booking,setbooking]=useState("");
    const [name11,setname11]=useState(0);
    

useEffect(() => {
  const postdata=async()=>{
   
    const data={city:city,city1:city1};
  await fetch("http://localhost:8082/open/getprice1", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(data), // Convert the data to JSON format
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((responseData) => {
        setprice(responseData); // Update the state with the response data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
};
  
    fetchData();
    fetchdest();
 postdata();
 {loading && paidfun();}

 
    
  }, [city,city1]);


const loady=()=>{
  setloading(true);
  setres("Confirm Booking");
};

 

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8082/open/spoints");
      const jsonData = await response.json();
      setspoint(jsonData);
      console.log(jsonData); // Assuming the API response is an array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchdest = async () => {
    try {
      const response = await fetch("http://localhost:8082/open/dpoints");
      const jsonData = await response.json();
      setdpoint(jsonData);
      console.log(jsonData); // Assuming the API response is an array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const onsubmit=async()=>{ 
  if(city!=="" && city1!=="" && no1!=="" && name1!=="" ){
    setbooking("BOOKING FINISHED :)");
    const data1={name:name1,cellno:no1,startpoint:city,destination:city1,payment:"done"};
  
    await fetch("http://localhost:8082/open/saveinfo",  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data1), // Convert the data to JSON format
      })
        .then((response) => {console.log(response)}) // Parse the response as JSON
        .catch(e=>{console.log("e",e)})
      }
else if(loading===false){
  alert("finish payment");
}
      else{
        alert("fill the details ");
      }

  };
  const paidfun =()=>{
    setpay("done");
  };
    
    
        
  return (
  <div>
    
    <center><h1 style={{textShadow:"4px 4px 4px red"}}>LIVE TO TRAVEL</h1></center>
    <div className="bg-image" > </div>
    <div className='maincontainer' style={{paddingTop:"50px",paddingBottom:"50px"}}>
    <div className="container" >
        <h2 style={{fontFamily:"cursive",textShadow:"4px 4px 4px blue"}}>TICKET BOOKING</h2>

        <form id="booking-form">
        <label htmlFor="event">From:</label>

<select id="event" name={city} onChange={e=>setcity(e.target.value)}>
   { spoint.map((e1)=>
    <option key={e1} value={e1} >{e1}</option>
)}
</select>
           
            <label htmlFor="event">To:</label>

            <select id="event" name={city1} onChange={e=>setcity1(e.target.value)}>
   { dpoint.map((e1)=>
    <option key={e1} value={e1} >{e1}</option>
)}
</select>

            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name"  value={name1} onChange={e=>setname1(e.target.value)} required/>

            <label htmlFor="email">Contact no:</label>
            <input type="email" id="email" name="email" value={no1} onChange={e=>setno1(e.target.value)} required/>
            <label htmlFor="tickets">Number of Tickets:</label>
            <input type="number" id="tickets" name="tickets" min="1" value={name11} onChange={e=>setname11(e.target.value)} required/>
            <p></p>
            <b><p style={{color: "green"}}>price:{name11*price}</p></b>
           <b> <p >Payment Status:{pay}</p></b>
            <button onClick={loady} >Pay</button>
            <p> </p>
            {loading && <Stat price={name11*price} paidfun={paidfun}  />}
             <button type="submit" onClick={onsubmit}>{res}</button>
            
        </form>
    </div>
   
</div>

<center><h1>{booking} <span className="badge bg-secondary"></span></h1></center>
<center><Link  style={{color:"white",backgroundColor:"black"}} type="button" className="btn btn-info" to='/status'>Check Status</Link></center>



</div>


  );
}
