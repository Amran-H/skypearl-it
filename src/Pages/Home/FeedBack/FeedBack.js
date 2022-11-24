import React from 'react';
import people1 from '../../../Assets/images/people1.png';
import people2 from '../../../Assets/images/people2.png';
import people3 from '../../../Assets/images/people3.png';
import Review from './Review';

const FeedBack = () => {

    const feedBacks = [
        {
            _id: 1,
            name: 'Amran Hossain',
            img: people1,
            userReview: ' Everyone here has been super helpful, professional, friendly and efficient! They take the time to educate you where needed with your computer and they are super proficient. They provide great service at a great price! you have to come here for your computer needs!',
            location: 'Dhaka'
        },
        {
            _id: 1,
            name: 'Amran Hossain',
            img: people2,
            userReview: ' Everyone here has been super helpful, professional, friendly and efficient! They take the time to educate you where needed with your computer and they are super proficient. They provide great service at a great price! you have to come here for your computer needs!',
            location: 'Dhaka'
        },
        {
            _id: 1,
            name: 'Amran Hossain',
            img: people3,
            userReview: ' Everyone here has been super helpful, professional, friendly and efficient! They take the time to educate you where needed with your computer and they are super proficient. They provide great service at a great price! you have to come here for your computer needs!',
            location: 'Dhaka'
        }
    ]

    return (
        <section className='my-16'>
            <div>
                <h4 className="text-4xl font-bold text-center"> What Our Buyer Says</h4>
            </div>
            <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    feedBacks.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </section>
    );
};

export default FeedBack;