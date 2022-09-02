import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';
import './Service.css';


const Service = (props) => {
    const { name, description, img } = props.service
    return (
        <div>
            <Card className='card-body' style={{
                width: '18rem',
                margin: '15px',
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", position: 'relative'

            }}>
                <Card.Img className='cardImg' variant="top" style={{ width: '243px', height: '160px' }} src={img} />

                <Card.Body>

                    <Card.Title className='title'>{name}</Card.Title>

                    <Card.Text className='text-primary service-detail'>
                        {description}
                    </Card.Text>

                    <Button variant="primary" style={{ position: 'absolute', bottom: '10px' }}>
                        Learn More
                        <FontAwesomeIcon className='mx-1' icon={faArrowAltCircleRight} />
                    </Button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Service;