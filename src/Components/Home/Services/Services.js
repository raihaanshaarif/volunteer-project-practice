import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('/vol.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services);
    return (
        <div className='mt-5 g-3'>
            {/* <h2>This is Services: {services.length}</h2> */}
            <div>
                <div className="row ">
                    {/* <div className='col-md-4'> */}
                    {
                        services.map(service => <Service
                        key={service.id}
                        service= {service}
                        ></Service>)
                    }
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Services;