import React from 'react';
import Category from '../../Category/Category/Category';
import Banner from '../Banner/Banner';
import ContactFrom from '../ContactFrom/ContactFrom';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    return (
        <div className=''>

            <Banner></Banner>
            <Category></Category>
            <FeedBack></FeedBack>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default Home;