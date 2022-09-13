import React from 'react';
import './AboutVideo.css';
import landingVideo from '../../images/landing-video/DVP_Landing.mp4'
import Slider from '../Shared/Slider/Slider';
import aboutUsBanner from '../../images/about-us/about-us-banner.jpg'


const AboutVideo = () => {
    return (

        <div id='about' className="row  video-div ">
            <img src={aboutUsBanner} className='img-fluid' alt="" />
            {/* <h4 className='text-center'>About us</h4> */}


            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 p-3 text-center text-div'>
                    <Slider />
                </div>

                <div className='col-lg-6 col-sm-12 my-4'>

                    <video src={landingVideo} controls width="560" height="315" className='container-fluid'>

                    </video>

                </div>
            </div>

        </div>



    );
};

export default AboutVideo;