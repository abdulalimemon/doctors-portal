import React from 'react';
import Title from '../Shared/Title';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            "_id": 1,
            "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "name": "Winson Herry",
            "location": "California",
            "img": people1
        },
        {
            "_id": 2,
            "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "name": "Winson Herry",
            "location": "California",
            "img": people2
        },
        {
            "_id": 3,
            "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "name": "Winson Herry",
            "location": "California",
            "img": people3
        }
    ]
    return (
        <div className='py-10 lg:py-20'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mx-5'>
                    <div>
                        <Title subTitle='Testimonial' title='What Our Patients Says' float='text-start'>
                        </Title>
                    </div>
                    <div>
                        <img className='w-16 md:24 lg:w-48' src={quote} alt="Quote" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-5 py-10'>
                    {
                        reviews.map(review => <Review review={review} key={review._id}></Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Testimonial;