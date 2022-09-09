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
                        <img style={{ width: '180px' }} src={dvpLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto my-2 mx-5  my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            size='lg'
                        >
                            <Nav.Link href="/home" className='header mx-4'  >HOME</Nav.Link>
                            <Nav.Link as={HashLink} to='#about' className='header mx-4'>ABOUT</Nav.Link>
                            <NavDropdown title="PRODUCT & SERVICES" className='header' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/learn-more/augmented-capacity-planning-and-benchmarking" className='header text-sm'>Augmented Capacity Planning & Benchmarking </NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/cloud-engineering" className='header'>Cloud Engineering </NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/streIn" className='header'>streIn</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="/learn-more/fsMon" className='header'>fsMon </NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/monitoring" className='header '>Monitoring</NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/PRx2" className='header'>PRx-2</NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/relationship-among-Ds-and-9s" className='header'>Relationship among Ds and 9s</NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/cScan" className='header'>cScan</NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/xRobo" className='header'>xRobo</NavDropdown.Item>
                                <NavDropdown.Item href="/learn-more/dFitness" className='header'>dFitness</NavDropdown.Item>


                            </NavDropdown>
                            <Nav.Link as={HashLink} to='#blog' className='header mx-4'>BLOG</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;