import React from 'react';
import './BgVideo.css';
import bgVideo from '../../images/circuit-mesh.mp4';
import dvpLogo from '../../images/dvp_logo.png'
import Typewriter from 'typewriter-effect';
import bgImage from '../../images/cuircuitBg2.jpg';

const BgVideo = () => {


    return (
        <div id='home-div'>
            <img className='bg-img' src={bgImage} alt="" />

            <div className='font'>
                <Typewriter
                    options={{
                        strings: ['dVantagePoint'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <div className='font-2'>
                <Typewriter
                    options={{
                        strings: ['Lorem ipsum dolor sit amet'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <p></p>
        </div>
    );
};

export default BgVideo;