import React from 'react';
import './Ourclient.css';
import barikTelecom from '../../images/client-icon/BarikTelecom.png';
import dtac from '../../images/client-icon/dtac.png';
import ericsson from '../../images/client-icon/ericsson.png';
import iSoftStone from '../../images/client-icon/iSoftStone.png';
import rayooTech from '../../images/client-icon/rayooTech.png';

const OurClient = () => {
    return (
        <div className="container my-4">

            <div className='text-center'>
                <h1>Our Clients</h1>
            </div>

            <div className="d-flex justify-content-between flex-nowrap client-icon">

                <img src={barikTelecom} alt="" />
                <img src={dtac} alt="" />
                <img src={ericsson} alt="" />
                <img src={iSoftStone} alt="" />
                <img src={rayooTech} alt="" />
            </div>

        </div>
    );
};

export default OurClient;