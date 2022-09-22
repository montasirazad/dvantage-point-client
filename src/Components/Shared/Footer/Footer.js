import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import dvpLogo from '../../../images/dvp_logo.png';
import australia from '../../../images/flag-icon/australia.png';
import bdFlag from '../../../images/flag-icon/bangladesh.png';
import canada from '../../../images/flag-icon/canada.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-div'>

            <footer className="text-center text-lg-start text-dark border-top ">

                <section className="d-flex justify-content-center  p-2">



                    <div >
                        <a href="https://www.facebook.com/Dvantagepoint-Limited-106835074561699"
                            target='blank' className="me-4 link-secondary">

                            < FacebookIcon sx={{ fontSize: 40 }} color="primary" />
                        </a>

                        <a href="https://www.linkedin.com/company/dvantagepoint" target='blank' className="me-4 link-secondary">
                            <LinkedInIcon sx={{ fontSize: 40 }} color="primary" />
                        </a>

                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-2">

                        <div className="row mt-3 align-items-center">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">


                                <img src={dvpLogo} style={{ width: '300px' }} alt="" /> <br />
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 row">

                                <div className='text-center'>
                                    <p className='text-primary'>Click here to send E-mail</p>
                                    <Link to='/dvantage-point/send-email'>
                                        <button className='button-85'>info@dvantagepoint.com</button>
                                    </Link>
                                </div>

                                <div className='my-2 shadow p-2  bg-body rounded'  >
                                    <p className='text-primary'>
                                        <small>
                                            <PlaceIcon />  35/L7 Gareeb-E-Newaz Avenue, Uttara Dhaka 1230, Bangladesh

                                            <img style={{ width: '30px', marginLeft: '5px' }} src={bdFlag} alt="" /> <br />
                                            <LocalPhoneIcon /> +880 13 030 80 685
                                        </small>

                                    </p>
                                </div>


                                <div className='my-2 shadow p-2  bg-body rounded' >
                                    <small>
                                        <p className='text-primary'><PlaceIcon />  7 Epping road, Epping, NSW-2121, Australia
                                            <img style={{ width: '30px', marginLeft: '5px' }} src={australia} alt="" /> <br />
                                            <LocalPhoneIcon /> +61422375845
                                        </p>
                                    </small>

                                </div>



                                <div className='my-2 shadow p-2  bg-body rounded'  >
                                    <small>
                                        <p className='text-primary'><PlaceIcon />  469, Queens Street, Thunderbay Ontario, Canada
                                            <img style={{ width: '32px', marginLeft: '5px' }} src={canada} alt="" /> <br />
                                            <LocalPhoneIcon /> +180 763 19705
                                        </p>
                                    </small>
                                </div>






                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-1 text-white footerBg">
                    © 2022-2023 DVANTAGEPOINT LIMITED

                </div>
                {/*bg-color #45637d  <EmailIcon />*/}
            </footer>

        </div>
    );
};

export default Footer;