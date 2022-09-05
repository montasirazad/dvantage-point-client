import React from 'react';
import './About.css';
import CloudDoneTwoToneIcon from '@mui/icons-material/CloudDoneTwoTone';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import TouchAppTwoToneIcon from '@mui/icons-material/TouchAppTwoTone';

// className="row my-5 g-5 row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-3"

const About = () => {
    return (

        <div className="row my-3 g-3  
                        row-cols-md-3 
                        row-cols-sm-2 
                        row-cols-lg-3">

            <div className="d-grid align-content-center justify-content-center text-center ">

                <CloudDoneTwoToneIcon sx={{
                    fontSize: '50px',
                    color: '#4fc3f7',
                    width: '250px',
                    height: '150px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <h5>Cloud Service</h5>

            </div>

            <div className="d-grid align-content-center justify-content-center ">

                <CodeIcon sx={{
                    color: '#f44336',
                    width: '150px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />


            </div>

            <div className="d-grid align-content-center justify-content-center ">


                <PsychologyIcon sx={{
                    fontSize: '40px',
                    color: '#0288d1',
                    width: '200px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />


            </div>

            <div className="d-grid align-content-center justify-content-center ">


                <TipsAndUpdatesTwoToneIcon sx={{
                    fontSize: '20px',
                    color: '#ffeb3b',
                    width: '200px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px',
                    backgroundColor:"#33eaff"
                }} />


            </div>

            <div className="d-grid align-content-center justify-content-center ">


                <LanguageTwoToneIcon sx={{
                    fontSize: '40px',
                    color: '#834bff',
                    width: '200px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />


            </div>

            <div className="d-grid align-content-center justify-content-center ">


                <TouchAppTwoToneIcon sx={{
                    fontSize: '40px',
                    color: '#e91e63',
                    width: '200px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />


            </div>

        </div>


    );
};

export default About;