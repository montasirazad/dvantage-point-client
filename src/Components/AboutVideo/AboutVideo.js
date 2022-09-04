import React from 'react';
import './AboutVideo.css';

const AboutVideo = () => {
    return (

        <div className="row my-5 video-div ">

            <div className='col-lg-6 col-sm-12 p-3 text-center text-div'>
                <p>
                    dvantgaepoint is an information technology and services
                    company providing solution engineering and consultancy services
                    to clients from Telecommunications, Fintech, Riders and Online media verticals.
                    We are small but focused group of globally connected diversified and experienced
                    IT & software professionals from Canada, Germany, China and Bangladesh.

                    We intend to belong in production readiness tollgates of our clients for
                    business-critical applications and software starting from design board until it sees production lights.
                    Let us focus on operational excellence and reliability engineering and assist in fostering your photons

                    Please check our services pages for details on what we do and
                    you are welcome to write to know even more: ✉ info@dvantagepoint.com

                </p>
            </div>

            <div className='col-lg-6 col-sm-12 my-4'>
                <iframe
                    width="560" height="315" src="https://www.youtube.com/embed/tUP5S4YdEJo"
                    title="YouTube video player"
                    className='container-fluid'
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

                </iframe>
            </div>
        </div>



    );
};

export default AboutVideo;