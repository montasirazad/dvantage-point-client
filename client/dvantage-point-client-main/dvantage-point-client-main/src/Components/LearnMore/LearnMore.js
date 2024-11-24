import React from 'react';
import { useParams } from 'react-router-dom';

const LearnMore = (props) => {
    console.log(props)
    //const {  description, } = props.service;
    const { name } = useParams();
    return (
        <div>
            <h1>title: {name}</h1>
            {/* <p>{description}</p> */}
        </div>
    );
};

export default LearnMore;