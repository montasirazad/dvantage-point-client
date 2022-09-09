import React from 'react';
import './Slider.css';
import ourMoto from '../../../images/newSliderPic/ourMoto.JPG';
import piChart from '../../../images/newSliderPic/piChart.JPG';
import products1 from '../../../images/newSliderPic/products1.JPG';
import products2 from '../../../images/newSliderPic/products2.JPG';
import roadmap from '../../../images/newSliderPic/roadmap.JPG';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ourMoto} className="d-block w-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={piChart} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={products1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={products2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={roadmap} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;