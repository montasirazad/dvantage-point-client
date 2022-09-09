import React from 'react';
import './BgVideo.css';
import bgVideo from '../../images/circuit-mesh.mp4';
import dvpLogo from '../../images/dvp_logo.png'


const BgVideo = () => {
    return (
        <div className='video-div'>
            <div className="content text-white">
                <img src={dvpLogo} alt="" />
                {/* <h1 className='text-primary'>DVANTAGEPOINT</h1> */}
                <p>is a technology services and consulting company operated in Sydney,
                    Australia and Dhaka, Bangladesh, coupling globally connected IT,
                    Telecom & Fintech professionals, mainly from Australia, Canada, Germany,
                    Ireland, China & Bangladesh and forming a diversified cross functional autonomous
                    team (CFAT), focused towards delivering evolved products and services to clients around the globe.</p>

            </div>

            <video
                id="myVideo"
                src={bgVideo} muted loop autoPlay type="video/mp4">

            </video>
        </div>
    );
};

export default BgVideo;