import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg'


const Info = () => {
    return (
        <div className='py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-1'>
                    <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' cardDes='Lorem Ipsum is simply dummy text of the pri' img={clock} ></InfoCard>
                    <InfoCard bgClass='bg-accent' cardTitle='Visit our location' cardDes='Brooklyn, NY 10036, United States' img={phone} ></InfoCard>
                    <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us now' cardDes='+000 123 456789' img={marker} ></InfoCard>
                </div>
            </div>
        </div>
    );
};

export default Info;