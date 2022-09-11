import React from 'react';
import './BgVideo.css';
import bgVideo from '../../images/circuit-mesh.mp4';
import dvpLogo from '../../images/dvp_logo.png'
import Typewriter from 'typewriter-effect';

const BgVideo = () => {


    return (
        <div id='home-div'>
            

            <div className='font'>
                <Typewriter
                    options={{
                        strings: ['dVantagePoint'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <Typewriter
                options={{
                    strings: ['Lorem ipsum dolor sit amet'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <p></p>
        </div>
    );
};

export default BgVideo;