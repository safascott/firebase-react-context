import React, { useState, useEffect } from 'react';
import '../firebase'; // Add this line prevent firebase not loading error
import { getFirestore, collection, getDocs } from "firebase/firestore";

function visitDate(timestamp, format){
     if(!timestamp){
        return '-'
     }
     let time = {
        seconds: timestamp['seconds'],
        nanoseconds: timestamp['nanoseconds'],
      }
      
      const fireBaseTime = new Date(
        time.seconds * 1000 + time.nanoseconds / 1000000,
      );
      const date = fireBaseTime.toDateString();
      const atTime = fireBaseTime.toLocaleTimeString();
      const year = fireBaseTime.getFullYear();
      const month = (fireBaseTime.getMonth() + 1).toString().padStart(2, "0");
      const day = (fireBaseTime.getDay() + 1).toString().padStart(2, "0");
      
      if(format == 'time'){
        return atTime;
      }
      
      return year+'-'+month+'-'+day;     
}

function Visitors(){

    let [storedValues, setStoredValues] = useState([]);
    const db = getFirestore();

    const fetchDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "visitors"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });

        const rowItems = temporaryArr.map((row, index) =>
            <tr key={index}>
                
                <td>{row.industry}</td>
                <td className='text-left'>{row.name}</td>
                <td>{row.website}</td>
                <td>{row.ip}</td>
                <td  scope="row">{visitDate(row.time)}</td>
                <td  scope="row">{visitDate(row.time, 'time')}</td>
            </tr>
        );
        setStoredValues(rowItems);
    };
    useEffect(() => {
        fetchDataFromFirestore();
      }, []);

    return (<div className='visitor-table'>
    <table className="table table-striped" style={{'textAlign':'left'}}>
    <thead>
        <tr>
        
        <th scope="col">Industry</th>
        <th scope="col">Company Name</th>
        <th scope="col">IP</th>
        <th scope="col">Domain</th>  
        <th scope="col">Date</th> 
        <th scope="col">Time</th> 
        </tr>
    </thead>
    <tbody>
        {storedValues}
    </tbody>
    </table>
    </div>
    )          
}
export default Visitors