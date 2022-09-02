import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';


const Footer = () => {
    return (
        <div >

            <footer className="text-center text-lg-start bg-white text-dark border-top mt-5">

                <section className="d-flex justify-content-center  p-4 border-bottom">

                    {/* <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div> */}

                    <div  >
                        <a href="https://www.facebook.com/" target='blank' className="me-4 link-secondary">
                            < FacebookIcon sx={{ fontSize: 40 }} color="primary" />
                        </a>
                        <a href="https://www.instagram.com/" target='blank' className="me-4 link-secondary">
                            <InstagramIcon sx={{ fontSize: 40, color: "#795548" }} />
                        </a>
                        <a href="https://twitter.com/tweeter" target='blank' className="me-4 link-secondary">
                            <TwitterIcon sx={{ fontSize: 40, color: '#00b0ff' }} />
                        </a>
                        {/* <a href="" className="me-4 link-secondary">
                            <GoogleIcon sx={{ fontSize: 40, color: "#2962ff" }} />
                        </a> */}
                        <a href="https://bd.linkedin.com/" target='blank' className="me-4 link-secondary">
                            <LinkedInIcon sx={{ fontSize: 40 }} color="primary" />
                        </a>
                        <a href="https://github.com/"  target='blank' className="me-4 link-secondary">
                            <GitHubIcon sx={{ fontSize: 40, color: "#000000" }} />
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><PlaceIcon />  New York, NY 10012, US</p>
                                <p>
                                    <EmailIcon />
                                    info@example.com
                                </p>
                                <p> <LocalPhoneIcon /> + 01 234 567 88</p>
                                <p><LocalPhoneIcon /> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: ' #45637d', color: 'white' }}>
                    © {new Date().getFullYear()} dvantagepoint

                </div>

            </footer>

        </div>
    );
};

export default Footer;