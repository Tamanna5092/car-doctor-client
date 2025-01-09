import React from 'react';
import Banner from '../Banner';
import About from './About';
import Services from './Services';
import Help from './Help';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Help></Help>
        </div>
    );
};

export default Home;