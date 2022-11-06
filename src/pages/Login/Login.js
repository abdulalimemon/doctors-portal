import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import googleIcon from '../../assets/images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='container mx-auto'>
                    <div className='h-screen flex justify-center items-center'>
                        <div className="card w-11/12 md:w-8/12 lg:w-5/12 mx-auto bg-base-100 rounded-lg shadow-xl">
                            <div className="card-body px-4 md:px-6">
                                <h2 className="text-2xl font-bold text-center">Login</h2>
                                <form action="">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Email</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                        <label className="label">
                                            <span className="label-text-alt">Alt label 1</span>
                                        </label>
                                    </div>
                                </form>
                                <div className="divider">OR</div>
                                <button 
                                className="btn btn-outline"
                                onClick={() => signInWithGoogle()}>
                                    <span className='mr-2'>
                                        <img src={googleIcon} className='w-7 md:w-10' alt="Google icon" />
                                    </span>
                                    CONTINUE WITH GOOGLE
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

export default Login;