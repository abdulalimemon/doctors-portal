import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/images/google.png';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user);
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button
                className="btn btn-outline capitalize w-full"
                onClick={() => signInWithGoogle()}>
                <span className='mr-2'>
                    <img src={googleIcon} className='w-7 md:w-10' alt="Google icon" />
                </span>
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;