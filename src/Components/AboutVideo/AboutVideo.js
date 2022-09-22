import React from 'react';
import './AboutVideo.css';
import landingVideo from '../../images/landing-video/DVP_Landing.mp4'
import Slider from '../Shared/Slider/Slider';
import aboutUsBanner from '../../images/about-us/about-us-banner.jpg'


const AboutVideo = () => {
    return (

        <div id='about' className="row">
            <img src={aboutUsBanner} className='banner img-fluid w-100' style={{height:'170px'}} alt="" />
            {/* <h4 className='text-center'>About us</h4> */}


            <div className='row my-4' >
                <div className='col-lg-6 col-sm-12'>
                    <Slider />
                </div>

                <div className='col-lg-6 
                                col-sm-12 
                                d-flex 
                                align-items-center
                                justify-content-center
                                my-3' >

                    <video src={landingVideo} controls width="580" height="300" className='container-fluid'>

                    </video>

                </div>
            </div>

        </div>



    );
};

export default AboutVideo;