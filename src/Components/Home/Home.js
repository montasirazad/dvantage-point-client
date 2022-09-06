import React from 'react';
import AboutIcons from '../AboutIcons/AboutIcons';
import AboutVideo from '../AboutVideo/AboutVideo';
import AllServices from '../AllServices/AllServices';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Shared/Footer/Footer';
import Slider from '../Shared/Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider />
            <AboutIcons />
            <AboutVideo />
            <AllServices />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;