import React from 'react';
import Banner from '../Shared/Banner';
import Title from '../Shared/Title';
import ServiceCard from './ServiceCard';
import treatment from '../../assets/images/treatment.png';

const Services = () => {
    return (
        <div className='py-14'>
            <div className='container mx-auto'>
                <Title subTitle='OUR SERVICES' title='Services We Provide' float='text-center'></Title>
                <ServiceCard></ServiceCard>
                <div className='pt-10'>
                    <Banner img={treatment} title='Exceptional Dental Care, on Your Terms' description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page`} display='flex-col lg:flex-row' height='lg:h-[32rem]' marginLeft='lg:px-16'></Banner>
                </div>
            </div>
        </div>
    );
};

export default Services;