import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate} from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import EmailVerify from '../Dashboard/RequireAdmin';
import { signOut } from 'firebase/auth';



const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="*" />;
    }

    if (!user.emailVerified) {
        return <EmailVerify></EmailVerify>
    }

    return children;
};

export default RequireAdmin;