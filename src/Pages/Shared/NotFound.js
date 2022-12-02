import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='flex justify-center items-center my-32'>
                <img
                    src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
                    alt="" />
            </div>
            <div className='text-center text-4xl font-bold -mt-16'>
                Please Return to <Link className='text-primary bg-info p-2 rounded' to={'/'}>Home Page</Link>
            </div>
        </div>
    );
};

export default NotFound;