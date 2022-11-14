import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit} = useForm();
    const handleLogin = data =>{
        console.log(data);
    }
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-4xl">Login</h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("passqord")}
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
            </div>
            <input
              type="submit"
              value="login"
              className="btn btn-accent w-full"
            />
          </form>
          <p className="p-2 text-sm text-center">
            New to Doctors Portal?
            <Link className="text-primary"> Create new account</Link>
          </p>
          <div className="divider">OR</div>
          <input
            type="submit"
            value="CONTINUE WITH GOOGLE"
            className="btn btn-outline w-full"
          />
        </div>
      </div>
    );
};

export default Login;