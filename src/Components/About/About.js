import React from 'react';
import circuitGif from '../../images/circuit-mesh.mp4';
import './About.css';


const About = () => {
    return (
        <div className="container-fluid about" style={{border:'2px solid red'}}>
            <div className="row">

                <div className="col-lg-4 col-sm-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Veniam asperiores tempora repudiandae est a libero, alias earum voluptas
                      voluptatum dolore harum nesciunt, impedit reprehenderit repellendus voluptatibus
                       provident. Sint ea iste eum voluptas tenetur ipsam obcaecati et enim, consequuntur
                        vel itaque rem tempore velit officia mollitia animi amet quod molestiae aliquam.
                </div>

                {/* <div className="col-lg-8 col-xs-12 col-sm-12 nopadding">
                    <video src={circuitGif}   height='500px'
                      autoPlay muted loop type="video/mp4"></video>
                </div> */}
            </div>

        </div>
    );
};

export default About;