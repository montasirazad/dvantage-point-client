import React from 'react';
import Typewriter from 'typewriter-effect';
import './BgVideo.css';


const BgVideo = () => {

    return (
        <div id='home-div'>

            <div className=' font img-fluid p-4'>
                <Typewriter
                    options={{
                        strings: ['Hub of IT Experts from different parts of the globe',
                            'Optimize IT Workloads meeting cost, scale and security ',
                            'Meet IT Resiliency at zero downtime',
                            'Developing reusable software at scale',
                            'Leverage strengths of cloud/multi-cloud services',
                            'Vantage excellence with next generation technologies'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1000,
                        delay: 100,
                        deleteSpeed: 7,


                    }}
                />


            </div>



        </div>
    );
};

export default BgVideo;