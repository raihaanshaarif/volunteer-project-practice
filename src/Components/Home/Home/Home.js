import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mt-5'>
            <Container>
                
                <h1 className='text-center'>I GROW BY HELPING PEOPLE IN NEED</h1>

                <InputGroup className="mb-3 mt-5 w-50 mx-auto">
                    <FormControl
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button className='btn btn-primary' variant="outline-secondary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
                <Services></Services>
            </Container>
        </div>
    );
};

export default Home;