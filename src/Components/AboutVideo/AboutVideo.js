import React from 'react';
import './AboutVideo.css';
import landingVideo from '../../images/landing-video/DVP_Landing.mp4'
import Slider from '../Shared/Slider/Slider';
import aboutUsBanner from '../../images/about-us/about-us-banner.jpg'


const AboutVideo = () => {
    return (

        <div className="row">
            <div>
                <img src={aboutUsBanner} className='banner my-4 img-fluid w-100' alt="" />
            </div>



            <div className=' my-4' >

                <div className='col-lg-12  col-sm-12'>
                    <Slider />


                </div>

                <div className='col-lg-12
                                col-md-12 
                                col-sm-12 
                                my-3
                                ratio ratio-21x9' >

                    <video src={landingVideo}
                        controls
                        controlsList="nodownload"
                        // width="580"
                        // height="300"
                        className='container-fluid'>

                    </video>

                </div>
            </div>

        </div>



    );
};

export default AboutVideo;