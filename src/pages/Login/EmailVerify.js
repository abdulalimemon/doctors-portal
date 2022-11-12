import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const EmailVerify = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    if (sending) {
        return <Loading></Loading>
    }
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='container mx-auto py-20'>
                    <div className='flex items-center justify-center'>
                        <div className='text-center px-5 md:px-2'>
                            <h2 className='text-2xl lg:text-3xl font-bold pb-5 text-secondary'>Welcome to Doctors Portal.</h2>
                            <h2 className='text-lg font-semibold pb-5 text-red-600'>Please check your email inbox for a link we send. <br /> Don't receive it? Click resend email below.</h2>
                            <button className='btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold capitalize text-base w-full' onClick={async () => {
                                await sendEmailVerification();
                                toast.success('An user verification email has been sent to your email address. Please check your inbox or spam folder.', {
                                    theme: "colored",
                                });
                            }}>Resend link</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default EmailVerify;