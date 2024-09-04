import React, { useState, useEffect } from 'react';
import '../firebase'; // Add this line prevent firebase not loading error
import { getFirestore, collection, getDocs, orderBy, query,limit } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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

function Personalization(){

    let [storedValues, setStoredValues] = useState([]);
    const db = getFirestore();

    const fetchDataFromFirestore = async () => {
        const collection_ref = collection(db, "ipPersonalization")
        const q = query(collection_ref, orderBy("time", "desc"), limit(100))
        const querySnapshot = await getDocs(q);
        //const querySnapshot = await getDocs(collection(db, "visitors"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        /*
        const rowItems = temporaryArr.map((row, index) =>
            <tr key={index}>
                
                <td>{row.industry}</td>
                <td>{row.website}</td>
                <td>{row.ip}</td>
                <td  scope="row">{visitDate(row.time)}</td>
                <td  scope="row">{visitDate(row.time, 'time')}</td>
            </tr>
        );
        */

        setStoredValues(temporaryArr);
        
    };
    useEffect(() => {
        fetchDataFromFirestore();
      }, []);

    return (<div>
      <h3>Personalization{console.log(storedValues)}</h3>
      <ButtonGroup aria-label="Basic example" size="sm">
        <Button variant="secondary" active>IP Based</Button>
        <Button variant="secondary" disabled>UTM</Button>
        
        <Button variant="secondary" disabled>Industry</Button>
        <Button variant="secondary" disabled>Company</Button>
        
    </ButtonGroup>
    </div>
    )          
}
export default Personalization