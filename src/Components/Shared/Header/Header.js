import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import dvpLogo from '../../../images/dvp_logo.png';




const Header = () => {


    return (


        <>
            <Navbar className='col-sm-12 container-fluid' bg="light" expand="lg" sticky="top" style={{ borderBottom: '1px solid lightgray' }}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className='mx-5 logo-title'
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
                            <Nav.Link as={Link} to="/" className='header mx-4'  >HOME</Nav.Link>
                            <Nav.Link as={HashLink} to='/home#about' className='header mx-4'>ABOUT</Nav.Link>
                            <NavDropdown title="SERVICES" className='header' id="basic-nav-dropdown">

                                <NavDropdown.Item as={Link} to='/learn-more/augmented-capacity-planning-and-benchmarking' className='header' id="RouterNavLink" >
                                    Augmented Capacity Planning 
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/learn-more/cloud-engineering" className='header'>Cloud Engineering </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/streln" className='header'>Streln</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item as={Link} to="/learn-more/fsMon" className='header'>fsMon </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/monitoring" className='header '>Monitoring</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/PRx2" className='header'>PRx-2</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/relationship-among-Ds-and-9s" className='header'>Relationship among Ds and 9s</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/cScan" className='header'>cScan</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/xRobo" className='header'>xRobo</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/learn-more/asg" className='header'>ASG</NavDropdown.Item>

                                {/* <NavDropdown.Item href="/learn-more/dFitness" className='header'>dFitness</NavDropdown.Item> */}


                            </NavDropdown>
                            <Nav.Link as={HashLink} to='/home#client' className='header mx-4'>CLIENTS</Nav.Link>
                            {/* <Nav.Link as={HashLink} to='#blog' className='header mx-4'>BLOGS</Nav.Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;