import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit } = useForm();

    const handleSignUp = (data) =>{
        console.log(data);
        console.log(errors);
    }

    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center">Sign up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",

                })}
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {value: 6, message: "Password must be 6 characters long"},
                  pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:"Password Must be Stronng"}
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <input
              type="submit"
              value="sign up"
              className="btn btn-accent w-full mt-5"
            />
          </form>
          <p className="p-2 text-sm text-center">
            Already have an account?
            <Link to="/signup" className="text-primary">
              Login
            </Link>
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

export default SignUp;