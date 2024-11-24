import React from 'react';
import landingVideo from '../../images/landing-video/DVP_Landing.mp4';
import './AboutVideo.css';


const AboutVideo = () => {
    return (

        <div className="row" id='about'>
            {/* <div>
                <img src={aboutUsBanner} className='banner my-4 img-fluid w-100' alt="" />
            </div> */}



            <div className='my-4' >
                {/* <div className="row">
                    <div className='col-xs-1 col-sm-1 col-lg-1'></div>
                    <div className='col-xs-10 
                                    col-sm-10
                                    col-lg-10 
                                    p-2
                                    border 
                                    border-1
                                    rounded
                                    border-primary'>
                        <Slider />


                    </div>
                    <div className='col-xs-1 col-sm-1 col-lg-1'></div>
                </div> */}

                <div className="row mt-3" >
                    <div className='col-xs-1 col-sm-1 col-lg-1'></div>
                    <div className='col-xs-10 
                                col-sm-10 
                                col-lg-10
                                p-2
                                border
                                border-1 
                                rounded 
                                border-primary' >

                        <video src={landingVideo}
                            controls
                            controlsList="nodownload"
                            className='container-fluid '>

                        </video>

                    </div>
                    <div className='col-xs-1 col-sm-1 col-lg-1'></div>
                </div>
            </div>

        </div>



    );
};

export default AboutVideo;