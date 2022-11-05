import React from 'react';
import img from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className='bannerBg'>
            <div className='container mx-auto px-5'>
                <div className='hero py-7 lg:py-16'>
                    <div className='hero-content flex-col gap-5 p-0 lg:gap-20 lg:flex-row-reverse'>
                        <img src={img} className='mt-3 lg:mt-0 rounded-lg shadow-2xl lg:h-[20rem]' alt='Banner' />
                        <div>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;