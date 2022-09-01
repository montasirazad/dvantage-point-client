import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#" className='mx-5 logo-title' style={{fontSize:'30px',color:'blue',fontWeight:'bold'}} >dvantagepoint</Navbar.Brand>
                    <Navbar.Toggle   aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto my-2 mx-5  my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            // navbarScroll
                            size='lg'
                        >
                            <Nav.Link href="#action1" className='header mx-3'  >HOME</Nav.Link>
                            <Nav.Link href="#action2" className='header mx-3'>ABOUT</Nav.Link>
                            <NavDropdown title="SERVICES" className='header mx-3' id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action3" className='header mx-3'>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className='header mx-3'>
                                    Another action
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action5" className='header mx-3'>
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;