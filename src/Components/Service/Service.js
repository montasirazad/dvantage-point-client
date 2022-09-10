import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const { name, description, img, url } = props.service
    return (
        <div>

            <div className="card  mx-3 my-3"
                style={{ width: "20rem", height: '500px', border: '1px solid #0c1c36' }}>

                <img src={img} className="card-img-top " style={{ width:'auto',height: '320px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>

                    <Link to={`/learn-more/${url}`}>
                        {/* <Button variant="dark" style={{ position: 'absolute', bottom: '10px' }}>
                            Learn More bg-primary text-white
                            <FontAwesomeIcon className='mx-1' icon={faArrowAltCircleRight} />
                        </Button> */}

                        <button className="button-85" style={{ position: 'absolute', bottom: '10px' }} >Learn More</button>
                    </Link>


                </div>
            </div>

        </div>
    );
};

export default Service;