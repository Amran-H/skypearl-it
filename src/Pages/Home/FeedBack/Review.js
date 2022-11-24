import React from 'react';

const Review = ({ review }) => {
    const { name, img, userReview, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <div className="flex items-center mb-4">
                    <div className="avatar mr-5">
                        <div className="w-16 rounded-full  ">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
                <p >{userReview}</p>
            </div>
        </div>
    );
};

export default Review;