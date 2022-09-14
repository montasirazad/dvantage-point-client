import React from 'react';
import AboutVideo from '../AboutVideo/AboutVideo';
import AllServices from '../AllServices/AllServices';
import BgVideo from '../BgVideo/BgVideo';
import OurClient from '../OurClient/OurClient';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <BgVideo />
            <AboutVideo />
            <OurClient />
            <AllServices />
            <Footer />
        </div>
    );
};

export default Home;