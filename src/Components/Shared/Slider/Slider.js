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
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ourMoto} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={piChart} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={roadmap} className="d-block w-100" alt="..." />
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
        </div>
    );
};

export default Slider;