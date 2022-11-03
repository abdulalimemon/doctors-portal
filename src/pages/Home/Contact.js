import React from 'react';
import Title from '../Shared/Title';

const Contact = () => {
    return (
        <div className='py-10 lg:py-20 appointmentBg'>
            <div className='container mx-auto'>
                <Title subTitle='Contact Us' title='Stay connected with us' float='text-center' color='text-white pt-2'>
                </Title>
                <div className='mt-10 px-5'>
                    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                            <div className="form-control mt-5">
                                <input type="email" placeholder="Email Address" className="input input-bordered text-base" />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" placeholder="Subject" className="input input-bordered text-base" />
                            </div>
                            <div className="form-control mt-5">
                            <textarea type='text' className="textarea textarea-bordered text-base" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold">Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;