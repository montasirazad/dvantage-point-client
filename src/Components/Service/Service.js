import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';



const Service = (props) => {
    const { name } = props.service
    return (
        <div>
            <Card style={{
                width: '18rem', height: '350px',
                margin: '15px',
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", position: 'relative'
                
            }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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