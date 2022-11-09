import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import googleIcon from '../../assets/images/google.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (gUser || user) {
        console.log(user, gUser);
        navigate(from, { replace: true });
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
        navigate('/appointment');
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>;
    }

    if (gError || error || uError) {
        toast.error((gError?.message, error?.message), {
            theme: "colored",
        })
    }

    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='container mx-auto'>
                    <div className='py-10 md:py-14 lg:py-20 flex justify-center items-center'>
                        <div className="card w-11/12 md:w-8/12 lg:w-5/12 mx-auto bg-base-100 rounded-lg shadow-xl">
                            <div className="card-body px-4 md:px-6">
                                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full pb-1">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name" className="input input-bordered w-full"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Name must be 3 characters or longer.'
                                                }
                                            })}
                                            aria-invalid={errors.name ? "true" : "false"} />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                                        </label>
                                    </div>
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
                                        <input type="submit" value='Sign Up' className='btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold capitalize text-lg' />
                                    </div>
                                    <p className='text-center text-sm pt-3 font-medium'>Already have an account? <Link to='/login' className='text-secondary'>Login now</Link></p>
                                </form>
                                <div className="divider">OR</div>
                                <button
                                    className="btn btn-outline capitalize"
                                    onClick={() => signInWithGoogle()}>
                                    <span className='mr-2'>
                                        <img src={googleIcon} className='w-7 md:w-10' alt="Google icon" />
                                    </span>
                                    Continue With Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SignUp;