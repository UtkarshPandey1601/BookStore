import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Login from './Login';
import { useAuth } from '../Context/AuthProvider';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4000/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        navigate("/course");
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || "Unexpected error"));
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content px-4">
        <div className="relative bg-base-100 shadow-xl rounded-2xl w-full max-w-md p-8">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                {...register('fullname', { required: 'Name is required' })}
              />
              {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Email address"
                className="input input-bordered w-full"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </form>
          <p className="text-sm text-center mt-6">
            Already have an account?{' '}
            <button
              onClick={() => document.getElementById('my_modal_3').showModal()}
              className="text-primary hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
      <Login />
    </>
  );
}

export default Signup;
