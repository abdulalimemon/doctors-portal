import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, location } = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 rounded-lg shadow-xl">
                <div className="card-body">
                    <p className='font-semibold'>{description}</p>
                    <div className='flex items-center mt-5'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                                <img src={img} alt="People" />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h2 className='text-xl font-semibold'>{name}</h2>
                            <h4 className='font-semibold'>{location}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;