import React from 'react';
import Title from '../Shared/Title';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className='py-14'>
            <div className='container mx-auto'>
                <Title subTitle='OUR SERVICES' title='Services We Provide' float='text-center'></Title>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;