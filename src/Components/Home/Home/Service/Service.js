// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const {id, name, image} = service

    const history = useHistory()

    const handleSubmit = (id) => {
        const uri= `/volunteer/${id}`
        history.push(uri)
    }

    return (
        <div className="col-lg-4 col-md-6 mb-3">
            {/* <h2>{name}</h2> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    
                    <Button onClick={()=>handleSubmit(id)} className='w-100' variant="primary">{name}</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Service;