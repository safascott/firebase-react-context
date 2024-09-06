import React, { useState, useEffect } from 'react';
import '../firebase'; // Add this line prevent firebase not loading error
import { getFirestore, collection, getDocs, orderBy, query,limit } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';


    function Personalization(){

        let [storedValues, setStoredValues] = useState([]);
        const db = getFirestore();

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

    const fetchDataFromFirestore = async () => {
        const collection_ref = collection(db, "ipPersonalization")
        const q = query(collection_ref, orderBy("time", "desc"), limit(100))
        const querySnapshot = await getDocs(q);
        //const querySnapshot = await getDocs(collection(db, "visitors"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        
        const rowItems = temporaryArr.map((row, index) =>
            <tr key={index}>
                
                <td  scope="row">{visitDate(row.time)
                }</td>
                <td>/</td>
                <td><input value={row.ip}></input></td>
                <td>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control size="sm" as="textarea" rows={3} value={row.header} />
                </Form.Group>
                </td>
                <td>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                  <Form.Control className="col-xs-4" size="sm" as="textarea" rows={5} value={row.copy} />
                </Form.Group>
                </td>
                <td>{row.status}
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                  />
                </Form>
                </td>
                
            </tr>
        );
        

        setStoredValues(rowItems);
        console.log(storedValues)
    };
    useEffect(() => {
        fetchDataFromFirestore();
      }, []);

    return (<div>
      <h3>Personalization{console.log(storedValues)}</h3>
      <ButtonGroup aria-label="Basic example" size="sm">
        <Button variant="secondary" disabled>All</Button>
        <Button variant="secondary" disabled>Industry</Button>
        <Button variant="secondary" disabled>Company</Button>
        <Button variant="secondary" disabled>Geolocation</Button>
        <Button variant="secondary" active>IP Based</Button>
        <Button variant="secondary" disabled>UTM</Button>
        
        
        <Button variant="secondary" disabled>Company</Button>
    </ButtonGroup>
    <table className="table table-striped" style={{'textAlign':'left', fontSize:'small'}}>
      <thead>
          <tr>
          <th scope="col">Date Created</th>
          <th scope="col">Path</th>
          <th scope="col">IP</th> 
          <th scope="col">Header</th> 
          <th scope="col">Copy</th>
          <th scope="col">Status</th> 
          </tr>
      </thead>
      <tbody>
          {storedValues
          }
      </tbody>
    </table>
    </div>
    )          
}
export default Personalization