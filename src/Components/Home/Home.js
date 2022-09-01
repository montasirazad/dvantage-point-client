import React from 'react';
import AllServices from '../AllServices/AllServices';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            {/* <Slider /> */}
            <AllServices />
        </div>
    );
};

export default Home;