import React from 'react';
import './BgVideo.css';
import bgVideo from '../../images/circuit-mesh.mp4';
import dvpLogo from '../../images/dvp_logo.png'
import Typewriter from 'typewriter-effect';
import bgImage from '../../images/bgEdited.jpeg';

const BgVideo = () => {
     
    return (
        <div id='home-div'>
            <img className='bg-img' src={bgImage} alt="" />


            {/* <div className='font'>
                <Typewriter
                    options={{
                        strings: ['dVantagePoint'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div> */}

            <div className='font-2'>

                {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Lorem ipsum dolor sit, <br/>amet consectetur adipisicing elit.<br/>Ex sed iure neque, delectus voluptatum corporis <br/>adipisicing elit. Nesciunt modi asperiores')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(1000)
                            .deleteAll()
                            .start()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })

                    }}
                /> */}

                {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(`Lorem ipsum dolor sit, <br/>amet consectetur adipisicing elit.<br/>Ex sed iure neque, delectus voluptatum corporis <br/>adipisicing elit. Nesciunt modi asperiores`)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(1000)
                            .deleteAll()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start()
                            
                    }}
                /> */}
                {/* <Typewriter
                    options={{
                        strings: [`Lorem ipsum dolor sit, <br/>
                        amet consectetur adipisicing elit.<br/>
                         Ex sed iure neque, delectus voluptatum corporis <br/>
                         adipisicing elit. Nesciunt modi asperiores `],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1000
                    }}
                /> */}
            </div>
<div id='app'>

</div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi asperiores quaerat harum saepe numquam.</p>
        </div>
    );
};

export default BgVideo;