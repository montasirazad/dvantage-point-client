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
import kaaz from '../../images/client-icon/Kaaz.jpg';
import kaajKi from '../../images/client-icon/kajkiLogo.png';
import nacenia from '../../images/client-icon/nascenia.png';


const OurClient = () => {
    return (
        <div className=" my-4" id='client'>

            <div className='row '>
                <img className='banner img-fluid w-100' src={clientsBanner} alt="" />
            </div>

            <div className="d-flex my-5 row
               justify-content-center
                flex-wrap 
                 
              client-icon">

                <img className='clients-image' src={kaaz} alt="" />
                <img className='clients-image' src={barikTelecom} alt="" />
                <img className='clients-image' src={roshanTelecom} alt="" />
                <img className='clients-image' src={dtac} alt="" />
                <img className='clients-image-ericsson' src={ericsson} alt="" />
                <img className='clients-image' src={iSoftStone} alt="" />
                <img className='clients-image-rayooTech' src={rayooTech} alt="" />
                <img className='clients-image' src={rahimafroj} alt="" />
                <img className='clients-image-kaajKi' src={kaajKi} alt="" />
                <img className='clients-image-necenia' src={nacenia} alt="" />

            </div>

        </div>
    );
};

export default OurClient;