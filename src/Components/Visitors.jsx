import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import '../firebase'; // Add this line prevent firebase not loading error
import { getFirestore, collection, getDocs, orderBy, query,limit } from "firebase/firestore";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a personalized experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                
            </p>
            <Form.Label htmlFor="basic-url">Create a personalized experience for:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                https://sitescaler.ai
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" defaultValue="/" />
            </InputGroup>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Header Text:</Accordion.Header>
                    <Accordion.Body>
                    Use generative AI to enhance user experiences.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Copy Text:</Accordion.Header>
                    <Accordion.Body>
                     Generative AI revolutionizes website personalization, enhancing engagement and boosting conversion rates. By utilizing third-party data solutions, you can target visitors effectively and utilize AI to autonomously deliver and enhance the best content experience to him.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary">Create Personalization</Button>
        </Modal.Footer>
      </Modal>
    );
  }


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
    const [modalShow, setModalShow] = React.useState(false);
    let [storedValues, setStoredValues] = useState([]);
    const db = getFirestore();

    const fetchDataFromFirestore = async () => {
        const collection_ref = collection(db, "visitors")
        const q = query(collection_ref, orderBy("time", "desc"), limit(100))
        const querySnapshot = await getDocs(q);
        //const querySnapshot = await getDocs(collection(db, "visitors"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });

        const rowItems = temporaryArr.map((row, index) =>
            <tr key={index}> 
                <td onClick={() => setModalShow(true)}>{row.industry}</td>
                <td>{row.website}</td>
                <td>-</td>
                <td>{row.ip}</td>
                <td>-</td>
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
    <h3>Target Accounts</h3>
    <table className="table table-striped" style={{'textAlign':'left', fontSize:'small'}}>
    <thead>
        <tr>
        <th scope="col">Industry</th>
        <th scope="col">Company</th>
        <th scope="col">Geo</th>
        <th scope="col">IP</th>
        <th scope="col">UTM</th>
        <th scope="col">Date</th> 
        <th scope="col">Time</th> 
        </tr>
    </thead>
    <tbody>
        {storedValues}
    </tbody>
    </table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    )          
}
export default Visitors