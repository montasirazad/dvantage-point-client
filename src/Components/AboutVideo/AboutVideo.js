import React from 'react';
import './AboutVideo.css';

const AboutVideo = () => {
    return (
        
            <div className="row my-5 p-3 video-div">

                <div className='col-lg-6 col-sm-12 p-3 text-center text-div'>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className='col-lg-6 col-sm-12 text-center'>
                    <iframe  
                        width="560" height="315" src="https://www.youtube.com/embed/tUP5S4YdEJo"
                        title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                </div>
            </div>


         
    );
};

export default AboutVideo;