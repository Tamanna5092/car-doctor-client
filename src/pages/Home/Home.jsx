import React from 'react';
import Banner from '../Banner';
import About from './About';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;