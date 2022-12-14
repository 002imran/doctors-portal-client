import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const { signIn, resetPassword } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
   
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
      navigate(from, { replace: true })
    }


    const handleLogin = (data) =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            
        })
        .catch(error =>{
             console.log(error.message);
             setLoginError(error.message);
        });
    }

    const handleResetPassword = (data) =>{
        setLoginError('');
        resetPassword(data.email)
        .then(()=>{
          return 'reset your password'
        })
       .catch(error=>{
        console.log(error)
        setLoginError(error.message)
      })
    }

    // const handleResetPassword = async()=>{
    //   if(!user.email) return setLoginError("Please enter your email");
    //   try{
    //     await resetPassword(user.email);
    //     setLoginError("Sent you a email with link, Please check your email.");
    //   }
    //   catch(error){
    //     setLoginError(error.message)
    //   }
    // }

    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
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
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {value: 6, message: "Password must be 6 characters or longer"}
                })}
                className="input input-bordered w-full max-w-xs"
              />

                
                 <a href="#!" className="text-sm py-2" onClick={handleResetPassword }>Forget Password?</a>
        
              {/* <button className='py-2 text-sm cursor-pointer' onClick={() => setModalShow(true)}></button>
                  <ResetPassword show={modalShow} onHide={()=> setModalShow(false)} /> */}
     
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="login"
              className="btn btn-accent w-full"
            />
            <div>
                { loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
          </form>
          <p className="p-2 text-sm text-center">
            New to Doctors Portal?
            <Link to='/signup' className="text-primary"> Create new account</Link>
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