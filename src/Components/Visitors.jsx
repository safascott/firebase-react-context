import React, { useState, useEffect } from 'react';
import '../firebase'; // Add this line prevent firebase not loading error
import { getFirestore, collection, getDocs, orderBy, query,limit } from "firebase/firestore";
import { CreatePersonalization } from './CreatePersonalization';



function visitDate(timestamp, format){
     if(!timestamp){
        return '-'
     }
     let dateObj = timestamp.toDate()

    const m   = dateObj.getMonth() + 1; // months from 1-12
    const d   = dateObj.getDate();
    const y   = dateObj.getFullYear();
    const t   = dateObj.toLocaleTimeString()

    if(format == 'time'){
        return t;
    }
    return y+'/'+m+'/'+d;     
}



function Visitors(){
    const [modalShow, setModalShow] = useState(false);
    const [dataRow, setDataRow] = useState(null);
    let [storedValues, setStoredValues] = useState([]);
    const db = getFirestore();

    function modalClick(row){
        setDataRow(row)
        setModalShow(true)
    }

    const fetchDataFromFirestore = async () => {
        const collection_ref = collection(db, "visitors")
        const q = query(collection_ref, orderBy("time", "desc"))
        const querySnapshot = await getDocs(q);
        //const querySnapshot = await getDocs(collection(db, "visitors"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });

        const rowItems = temporaryArr.map((row, index) =>
            <tr key={index}> 
                <td onClick={() => modalClick(row)}>{row.industry}</td>
                <td>{row.website}</td>
                <td>-</td>
                <td className="visitor-ip" onClick={() => modalClick(row)}>{row.ip}</td>
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
    <CreatePersonalization
        data={dataRow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    )          
}
export default Visitors