import React from 'react';
import Banner from '../Shared/Banner';
import Info from './Info';
import Services from './Services';
import bannerBg from '../../assets/images/chair.png';


const Home = () => {
    return (
        <div>
            <div className='lg:py-14 bannerBg'>
                <Banner img={bannerBg} title='Your New Smile Starts Here' description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`}  display='flex-col lg:flex-row-reverse' height='lg:h-[20rem]' marginLeft="lg:mr-10"></Banner>
            </div>
            <Info></Info>
            <Services></Services>
        </div >
    );
};

export default Home;