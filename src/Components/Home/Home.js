import React from 'react';
import AboutIcons from '../AboutIcons/AboutIcons';
import AboutVideo from '../AboutVideo/AboutVideo';
import AllServices from '../AllServices/AllServices';
import BgVideo from '../BgVideo/BgVideo';
import ContactForm from '../ContactForm/ContactForm';
import OurClient from '../OurClient/OurClient';
import Footer from '../Shared/Footer/Footer';
import Slider from '../Shared/Slider/Slider';

const Home = () => {
    return (
        <div>
            <BgVideo />
            {/* <Slider /> */}

            {/* <AboutIcons /> */}
            <AboutVideo />
            <OurClient />
            <AllServices />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;