import React from 'react';
import Banner from '../Banner';
import About from './About';
import Services from './Services';
import Help from './Help';
import Products from './Products';
import Team from './Team';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Help></Help>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;