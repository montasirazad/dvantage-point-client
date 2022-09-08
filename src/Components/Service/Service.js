import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Service.css';
 

const Service = (props) => {
    const { name, description, img, url } = props.service
    return (
        <div>

            <div className="card bg-primary text-white mx-3 my-3"
             style={{width: "18rem",height: '480px',border:'1px solid #0c1c36'}}>

                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>

                    <Link to={`/learn-more/${url}`}>
                        <Button variant="dark" style={{ position: 'absolute', bottom: '10px' }}>
                            Learn More
                            <FontAwesomeIcon className='mx-1' icon={faArrowAltCircleRight} />
                        </Button>
                    </Link>

                    {/* <button className='btn btn-primary' style={{ position: 'absolute', bottom: '10px' }}>
                        Learn More
                    </button> */}
                </div>
            </div>

            {/* <Card className='card-body' style={{
                width: '18rem',
                margin: '15px',
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", position: 'relative'

            }}>
                <Card.Img className='cardImg' variant="top"  src={img} />

                <Card.Body>

                    <Card.Title className='title'>{name}</Card.Title>

                    <Card.Text className='text-dark service-detail'>
                        {description}
                    </Card.Text>

                    <Link to={`/learn-more/${url}`}>
                        <Button variant="primary" style={{ position: 'absolute', bottom: '10px' }}>
                            Learn More
                            <FontAwesomeIcon className='mx-1' icon={faArrowAltCircleRight} />
                        </Button>
                    </Link>
                </Card.Body>

            </Card> */}
        </div>
    );
};

export default Service;