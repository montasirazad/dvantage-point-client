import React from 'react';
import About from '../About/About';
import AboutVideo from '../AboutVideo/AboutVideo';
import AllServices from '../AllServices/AllServices';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Slider from '../Shared/Slider/Slider';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Slider />
            <About />
            <AboutVideo />
            <AllServices />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;