import React from 'react';
import Banner from '../Banner/Banner';
import ContactFrom from '../ContactFrom/ContactFrom';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    return (
        <div className=''>
            Home
            <Banner></Banner>

            <FeedBack></FeedBack>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default Home;