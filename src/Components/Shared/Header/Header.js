import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';
import dvpLogo from '../../../images/dvp_logo.png';
import './Header.css';


const Header = () => {
    return (
        <>
            <Navbar className='col-sm-12 container-fluid' bg="light" expand="lg" sticky="top" style={{ borderBottom: '1px solid lightgray' }}>
                <Container fluid>
                    <Navbar.Brand href="#" className='mx-5 logo-title'
                        >
                            <img style={{width:'240px' }}  src={dvpLogo} alt="" />
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto my-2 mx-5  my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            size='lg'
                        >
                            <Nav.Link href="#action1" className='header mx-3'  >HOME</Nav.Link>
                            <Nav.Link as={HashLink} to='#about' className='header mx-3'>ABOUT</Nav.Link>
                            <NavDropdown title="PRODUCT AND SERVICES" className='header' id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action3" className='header '>Augmented Capacity Planning and Benchmarking </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className='header'>Cloud Engineering </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action5" className='header'>fsMon </NavDropdown.Item>
                                <NavDropdown.Item href="#action6" className='header'>PRx-2</NavDropdown.Item>
                                <NavDropdown.Item href="#action7" className='header'>xRobo</NavDropdown.Item>
                                <NavDropdown.Item href="#action8" className='header '>next item 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action9" className='header'>next item 2</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={HashLink} to='#blog' className='header mx-5'>BLOG</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;