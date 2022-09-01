import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h4 className='mx-5'>dvantagepoint</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item mx-3 my-1">
                                <Link to='/'><p>HOME</p></Link>
                            </li>
                            <li className="nav-item mx-3 my-1">
                                <Link to='/'><p>HOME</p></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown"   data-bs-toggle="dropdown" aria-expanded="false">
                                    <p>Dropdown</p>
                                </Link>
                                <ul className="dropdown-menu mx-3" aria-labelledby="navbarDropdown">
                                    <li className="nav-item mx-3 my-1">
                                        <Link to='/'><p>HOME</p></Link>
                                    </li>
                                    <li className="nav-item mx-3 my-1">
                                        <Link to='/'><p>HOME</p></Link>
                                    </li>

                                    <li className="nav-item mx-3 my-1">
                                        <Link to='/'><p>HOME</p></Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;