import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { user, setUser, signInWithGoogle } = useAuth()

    const location = useLocation()
        const history = useHistory()
        const redirect_uri = location.state?.from || '/home';
        const handleGoogleLogin = () => {
            signInWithGoogle()
            .then((result) => {
              console.log(result.user)
              setUser(result.user)
              history.push(redirect_uri)
            })
          }

    return (
        <div className='container'>
            <div>
                <div className="row  d-flex justify-content-center">
                    <div className="col-md-4">
                        <div>
                            <h4 className='text-center'>Login With</h4>
                            <button onClick={handleGoogleLogin} className='btn btn-warning'>Continue with Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;