import React from 'react';
import './Ourclient.css';
import barikTelecom from '../../images/client-icon/BarikTelecom.png';
import dtac from '../../images/client-icon/dtac.png';
import ericsson from '../../images/client-icon/ericsson.png';
import iSoftStone from '../../images/client-icon/iSoftStone.png';
import rayooTech from '../../images/client-icon/rayooTech.png';
import clientsBanner from '../../images/clientsBanner.jpg';
import roshanTelecom from '../../images/client-icon/roshanTelecom.png';
import rahimafroj from '../../images/client-icon/rahimafroj.png';


const OurClient = () => {
    return (
        <div className=" my-4" id='client'>

            <div className='row '>
                <img className='banner img-fluid w-100' src={clientsBanner} alt="" />
            </div>

            <div className="d-flex my-5 row
               justify-content-evenly
                flex-wrap
              client-icon">

                <img src={barikTelecom} alt="" />
                <img src={dtac} alt="" />
                <img src={ericsson} alt="" />
                <img src={iSoftStone} alt="" />
                <img src={rayooTech} alt="" />
                <img src={roshanTelecom} alt="" />
                <img src={rahimafroj} alt="" />
            </div>

        </div>
    );
};

export default OurClient;