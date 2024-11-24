import React from 'react';
import './Slider.css';
import aboutUs1 from '../../../images/aboutUsSliderImage/AboutUs1.jpg';
import aboutUs2 from '../../../images/aboutUsSliderImage/AboutUs2.jpg';
import aboutUs3 from '../../../images/aboutUsSliderImage/AboutUs3.jpg';
import aboutUs4 from '../../../images/aboutUsSliderImage/AboutUs4.jpg';
import aboutUs5 from '../../../images/aboutUsSliderImage/AboutUs5.jpg';

const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src={aboutUs1} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={aboutUs2} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={aboutUs3} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={aboutUs4} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={aboutUs5} className="d-block w-100" alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;