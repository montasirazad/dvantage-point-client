import React from 'react';
import circuitGif from '../../../images/circuit-mesh.mp4';
import './Slider.css'


const Slider = () => {
    return (
        <div className=' d-flex flex-row'>

            <div className=' text-center' style={{ backgroundColor: 'black', border: '1px solid blue', width: '700px', height: '400px' }}>
                <h1 className='text-white'>hello</h1>
            </div>

            <div className=''>
                {/* <video src={circuitGif} style={{ width: '700px' }}
                    autoPlay muted loop type="video/mp4"></video> */}
                {/* style={{ border: '1px solid blue', width: '700px', height: '400px' }} */}
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" autoPlay muted loop src={circuitGif}  ></iframe>
                </div>
            </div>

        </div>
    );
};

export default Slider;