import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Volunteer = () => {
    const {id} = useParams()
    const [details, setDetails]= useState([])
    const [specificDetail, setSpecificDetail] = useState({})

    useEffect(() =>
    fetch("/vol.json")
    .then(res => res.json())
    .then(data=>setDetails(data))
  ,[])
console.log(details);

    useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail.id===parseInt(id))
        setSpecificDetail(matchedData);
        
    }
}
,[details])
console.log(specificDetail);
    return (
        <div>
            <h2> This is dynamic page and id is:{id}</h2>
           <p>Name: {specificDetail?.name}</p>
           
        </div>
    );
};

export default Volunteer;