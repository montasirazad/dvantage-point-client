import React from 'react';
import AboutVideo from '../AboutVideo/AboutVideo';
import AllServices from '../AllServices/AllServices';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Slider from '../Shared/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <AboutVideo />
            <AllServices />
            <Footer />
        </div>
    );
};

export default Home;