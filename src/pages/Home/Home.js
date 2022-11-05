import React from 'react';
import Banner from '../Shared/Banner';
import Info from './Info';
import Services from './Services';
import bannerBg from '../../assets/images/chair.png';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AppointmentHome from './AppointmentHome';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:py-14 bannerBg'>
                <div className='container mx-auto'>
                    <Banner img={bannerBg} title='Your New Smile Starts Here' description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`} display='flex-col lg:flex-row-reverse' height='lg:h-[20rem]' marginLeft="lg:mr-10"></Banner>
                </div>
            </div>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;