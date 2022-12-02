import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import UseToken from '../hooks/UseToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, handleGoogleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = UseToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Successfully created user')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(e => console.error(e));
            })
            .catch(e => {
                console.error(e)
                setSignUpError(e.message)
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }



    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors?.name?.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label"> <span className="label-text">Choose your option</span></label>
                        <select
                            {...register("role", { required: true })}
                            className="select select-bordered w-full max-w-xs">
                            <option selected>buyer</option>
                            <option>seller</option>

                        </select>
                        {errors?.condition && <p className='text-red-600'>{errors?.condition?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors?.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors?.password?.message} </p>}
                    </div>
                    <input className='btn  w-full' value="SignUp" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;