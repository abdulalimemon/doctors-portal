import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit =async (data) => {
        console.log(data);
        await sendPasswordResetEmail(data.email);
        await toast.success('A reset password email has been sent to your email address. please check your inbox or spam folder.', {
            theme: "colored",
        });
    }

    if(sending){
        return <Loading></Loading>
    }

    if (error?.message) {
        toast.error('error?.message', {
            theme: "colored",
        });
    }
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='container mx-auto'>
                    <div className='py-10 md:py-14 lg:py-20 flex justify-center items-center'>
                        <div className="card w-11/12 md:w-8/12 lg:w-6/12 mx-auto bg-base-100 rounded-lg shadow-xl">
                            <div className="card-body px-4 md:px-6">
                                <h2 className="text-2xl font-bold text-center">Find Your Account</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full pb-1">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Please enter your email address to search for your account.</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email address" className="input input-bordered w-full"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid email address.'
                                                }
                                            })}
                                            aria-invalid={errors.mail ? "true" : "false"} />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div className='form-control w-full'>
                                        <input type="submit" value='Next' className='btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold capitalize text-lg' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ForgotPassword;