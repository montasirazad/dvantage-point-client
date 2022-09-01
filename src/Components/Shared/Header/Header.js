import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" style={{ borderBottom: '1px solid lightgray' }}>
                <Container fluid>
                    <Navbar.Brand href="#" className='mx-5 logo-title' style={{ fontSize: '30px', color: '#0d6efd', fontWeight: 'bold' }} >dvantagepoint</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

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
                                <NavDropdown.Item href="#action3" className='header mx-1'>Augmented Capacity Planning and Benchmarking </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className='header mx-1'>Cloud Engineering </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action5" className='header mx-1'>fsMon </NavDropdown.Item>
                                <NavDropdown.Item href="#action6" className='header mx-1'>PRx-2</NavDropdown.Item>
                                <NavDropdown.Item href="#action7" className='header mx-1'>xRobo</NavDropdown.Item>
                                <NavDropdown.Item href="#action8" className='header mx-1'>next item 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action9" className='header mx-1'>next item 2</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Form className="d-flex submit-area">
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