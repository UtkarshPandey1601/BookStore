import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };
    try {
      const res = await axios.post("http://localhost:4000/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        document.getElementById("my_modal_3").close();
        navigate("/course");
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || "Unexpected error"));
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal modal-middle">
        <div className="modal-box p-8 md:p-10 rounded-2xl shadow-2xl bg-base-100 dark:bg-gray-800 text-base-content dark:text-gray-200 border border-gray-200 dark:border-gray-700 relative">
          <form method="dialog" className="absolute right-4 top-4">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
          <h3 className="font-bold text-3xl mb-6 text-center">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-md w-full"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-md w-full"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <button type="submit" className="btn btn-primary btn-lg w-full">Login</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
