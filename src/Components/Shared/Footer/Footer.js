import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import './Footer.css';
import dvpLogo from '../../../images/dvp_logo.png'


const Footer = () => {
    return (
        <div >

            <footer className="text-center text-lg-start bg-white text-dark border-top mt-5">

                <section className="d-flex justify-content-center  p-4 border-bottom">

                    {/* <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div> */}

                    <div  >
                        <a href="https://www.facebook.com/Dvantagepoint-Limited-106835074561699"
                            target='blank' className="me-4 link-secondary">

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
                        <a href="https://github.com/" target='blank' className="me-4 link-secondary">
                            <GitHubIcon sx={{ fontSize: 40, color: "#000000" }} />
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img src={dvpLogo} style={{ width: '180px' }} alt="" />
                                </h6>
                                <p className='text-primary'>
                                    DVANTAGEPOINT is a technology services and
                                    consulting company operated in Sydney,
                                    Australia and Dhaka, Bangladesh, coupling
                                    globally connected IT, Telecom & Fintech
                                    professionals, mainly from Australia, Canada,
                                    Germany, Ireland, China & Bangladesh and
                                    forming a diversified cross functional
                                    autonomous team (CFAT), focused towards
                                    delivering evolved products and services to
                                    clients around the globe.
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
                                <p className='text-primary'><PlaceIcon />  7 Epping road, Epping, NSW-2121, Australia</p>
                                <p className='text-primary'><PlaceIcon />  469, Queens Street, Thunderbay Ontario, Canada</p>
                                <p className='text-primary'><PlaceIcon />  35/L7 Gareeb-E-Newaz Avenue, Uttara Dhaka 1230, Bangladesh</p>
                                <p className='text-primary'><EmailIcon className='mx-2' />
                                    info@dvantagepoint.com
                                </p>

                                <p className='text-primary'> <LocalPhoneIcon /> +61422375845</p>
                                <p className='text-primary'><LocalPhoneIcon /> +180 763 19705</p>
                                <p className='text-primary'><LocalPhoneIcon /> +880 13 030 80 685</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-2 " style={{ color: 'black',backgroundColor:'rgba(21, 93, 247, 0.5)' }}>
                    © {new Date().getFullYear()} dvantagepoint

                </div>
                {/*bg-color #45637d */}
            </footer>

        </div>
    );
};

export default Footer;