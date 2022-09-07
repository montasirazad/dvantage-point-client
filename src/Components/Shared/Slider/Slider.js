import React from 'react';
import pic1 from '../../../images/pic-1.jpg';
import pic2 from '../../../images/pic-2.png';
import pic3 from '../../../images/pic-3.jpg';
import circuitGif from '../../../images/circuit-mesh.mp4';
import bgGif from '../../../images/bg-gif.gif'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide col-sm-12 col-md-12" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video src={circuitGif} className="d-block w-100"
                            autoPlay muted loop type="video/mp4"></video>

                        {/* <img src={pic1} className="d-block w-100" alt="..." /> */}
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p >dvantgaepoint is an information technology and services company providing
                                solution engineering and consultancy services to clients from Telecommunications,
                                Fintech, Riders and Online media verticals. We are small but focused group of
                                globally connected diversified and experienced IT & software professionals from
                                Canada, Germany, China and Bangladesh. </p>
                        </div>
                    </div>

                    {/* <div className="carousel-item">
                        <img src={bgGif} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>We intend to belong in production readiness tollgates of our clients
                                for business-critical applications and software starting from design board until
                                it sees production lights.
                                Let us focus on operational excellence and reliability
                                engineering and assist in fostering your photons
                            </p>
                        </div>
                    </div> */}

                    {/* <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;