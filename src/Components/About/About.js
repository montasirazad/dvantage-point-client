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

                    color: '#4fc3f7',
                    width: '250px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <p>Cloud Service</p>

            </div>

            <div className="d-grid align-content-center justify-content-center text-center ">

                <CodeIcon sx={{

                    color: '#4fc3f7',
                    width: '250px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <p>Software</p>



            </div>

            <div className="d-grid align-content-center justify-content-center text-center ">


                <PsychologyIcon sx={{

                    color: '#4fc3f7',
                    width: '250px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <p>Expert Professionals</p>



            </div>

            <div className="d-grid align-content-center justify-content-center text-center ">


                <TipsAndUpdatesTwoToneIcon sx={{

                    color: '#4fc3f7',
                    width: '250px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <p> idea </p>

            </div>

            <div className="d-grid align-content-center justify-content-center text-center ">


                <LanguageTwoToneIcon sx={{

                    color: '#4fc3f7',
                    width: '250px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <p>Across the World</p>

            </div>

            <div className="d-grid align-content-center justify-content-center text-center ">


                <TouchAppTwoToneIcon sx={{

                    color: '#4fc3f7',
                    width: '250px',
                    height: '100px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginBottom: '15px'
                }} />
                <p>All in One Solution</p>


            </div>

        </div>


    );
};

export default About;