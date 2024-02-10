import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { IoIosWarning } from "react-icons/io";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        if(password !== confirmpassword){
            setError('Your password did not match');
            return
        }
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className="w-1/2 lg:mr-20">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Signup now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" name='username' placeholder="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <IoIosWarning className='text-accent mr-1' />
                                <p className="label-text-alt ">  Password should be at least 6 characters</p>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmpassword' placeholder="confirm password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt text-error"> {error} </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Signup" className="btn btn-accent" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account? <Link to="/login" className='text-accent'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;