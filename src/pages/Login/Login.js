import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SocialLogin from './SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);
    }

    useEffect(() => {
        if (user) {
            console.log(user);
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='container mx-auto'>
                    <div className='py-10 md:py-14 lg:py-20 flex justify-center items-center'>
                        <div className="card w-11/12 md:w-8/12 lg:w-6/12 mx-auto bg-base-100 rounded-lg shadow-xl">
                            <div className="card-body px-4 md:px-6">
                                <h2 className="text-2xl font-bold text-center">Login</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full pb-1">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email" className="input input-bordered w-full"
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
                                    <div className="form-control w-full pb-1">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password" className="input input-bordered w-full"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 8,
                                                    message: 'Password must be 8 characters or longer.'
                                                }
                                            })}
                                            aria-invalid={errors.password ? "true" : "false"} />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                                        </label>
                                    </div>
                                    <div className='form-control w-full'>
                                        <input type="submit" value='Login' className='btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold capitalize text-lg' />
                                    </div>
                                    <div>
                                        <div className='flex flex-col-reverse lg:justify-between lg:flex-row'>
                                            <p className='text-center lg:text-start text-sm pt-3 font-medium'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                                            <p className='text-center lg:text-end text-sm pt-3 font-medium'><Link to='/forgotpassword' className='text-secondary'>Forgot Password?</Link></p>
                                        </div>
                                    </div>

                                    {error?.message === 'Firebase: Error (auth/user-not-found).' && <p className='text-red-600 text-lg font-semibold pt-3 text-center'>User Not Found</p>}
                                    {error?.message === 'Firebase: Error (auth/wrong-password).' && <p className='text-red-600 text-lg font-semibold pt-3 text-center'>Wrong password</p>}
                                    {error?.message === 'Firebase: Error (auth/invalid-email).' && <p className='text-red-600 text-lg font-semibold pt-3 text-center'>Invalid Email</p>}
                                    {(error?.message) && <p className='text-red-600 text-lg font-semibold pt-3 text-center'>{error?.message}</p>}

                                </form>
                                <div className="divider font-semibold">OR</div>
                                <div className='w-full'>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;