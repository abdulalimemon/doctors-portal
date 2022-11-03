import React from 'react';
import ServiceCardItem from './ServiceCardItem';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const ServiceCard = () => {
    return (
        <div className='mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-1'>
                <ServiceCardItem img={fluoride} title='Fluoride Treatment' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' ></ServiceCardItem>
                <ServiceCardItem img={cavity} title='Cavity Filling' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' ></ServiceCardItem>
                <ServiceCardItem img={whitening} title='Teeth Whitening' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' ></ServiceCardItem>
            </div>
        </div>
    );
};

export default ServiceCard;