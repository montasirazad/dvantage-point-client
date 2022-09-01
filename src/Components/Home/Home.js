import React from 'react';
import AllServices from '../AllServices/AllServices';
import Header from '../Shared/Header/Header';
import Slider from '../Shared/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <AllServices />
        </div>
    );
};

export default Home;