import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../Assets/logos/Group 1329.png'
import useAuth from '../../../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
            <Navbar bg="transparent" variant="dark">
                <Container>
                <Navbar.Brand href="#home"> <img className='logo' src={logo} alt="" /> </Navbar.Brand>
                <Nav className="ms-auto ">
                <Nav.Link as={HashLink} to="/home#home" className='text-dark'>Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#donation" className='text-dark'>Donation</Nav.Link>
                <Nav.Link as={HashLink} to="/home#events" className='text-dark'>Events</Nav.Link>
                <Nav.Link as={HashLink} to="/home#blogs" className='text-dark'>Blogs</Nav.Link>
                {/* <Nav.Link as={HashLink} to="/home#blogs" className='text-dark'>Login</Nav.Link> */}
                

                { user.displayName ?
                            <>
                                <p className='user-name'>{user.displayName} </p>
                                <button onClick={logOut} className='btn btn-danger'>Logout</button>
                            </> 
                            
                                :
                                <>
                                <Link to ='/login'><button className='btn btn-success'>Login</button></Link>
                                
                             </> 
                                }
                
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;