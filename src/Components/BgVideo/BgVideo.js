import React from 'react';
import './BgVideo.css';
import bgVideo from '../../images/circuit-mesh.mp4';
import dvpLogo from '../../images/dvp_logo.png'
import Typewriter from 'typewriter-effect';
import bgImage from '../../images/bgEdited.jpeg';

const BgVideo = () => {

    return (
        <div id='home-div'>
            {/* <img className='bg-img' src={bgImage} alt="" /> */}


            {/* <div className='font'>
                <Typewriter
                    options={{
                        strings: ['dVantagePoint'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div> */}

            <div className='font'>

                <div  >
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
                            pauseFor: 100,
                            delay: 100,
                            deleteSpeed: 80,


                        }}
                    />
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
                        typewriter.typeString(`Hub of IT Experts from different parts of the globe <br/>`)
                            .callFunction(() => {
                                
                            })
                            .pauseFor(500)
                            .typeString('Optimize IT Workloads meeting cost, scale and security ')
                            .pauseFor(500)
                            // .deleteAll(50)
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start()

                    }}
                /> */}


                </div>
                {/* <p>
                    `Hub of IT Experts from different parts of the globe <br />
                    Optimize IT Workloads meeting cost, scale and security  <br />
                    Meet IT Resiliency at zero downtime  <br />
                    Developing reusable software at scale  <br />
                    Leverage strengths of cloud/multi-cloud services  <br />
                    Vantage excellence with next generation technologies `
                </p> */}

            </div>




        </div>
    );
};

export default BgVideo;