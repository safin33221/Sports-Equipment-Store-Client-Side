import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { loginUserWithEmailPass, createUserWithGoogle } = useContext(authContext)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const handleLoginwithEimailPasswored = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);
        loginUserWithEmailPass(email, password)
            .then(result => {
                console.log(result);
                navigate('/')
                return toast.success('Login successful', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,

                });
            })
            .catch(error => {
                console.log(error.code);
                if (error.code === "auth/invalid-credential") {
                    return toast.error(' Invalid Email or Password', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,

                    });
                }
            })
    }
    const handleLoginWithGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                console.log(result);
                navigate('/')
                return toast.success('Login successful with Google', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,

                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-96 mx-auto p-10 border-2 rounded-lg py-10 my-6">
            <Helmet><title>SE | Login</title></Helmet>
            <h1 className="text-2xl font-bold text-center mb-3">Login Now</h1>

            <form onSubmit={handleLoginwithEimailPasswored}>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input required name="email" type="text" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input required name="password" type={`${showPass ? "text" : "password"}`} className="grow" placeholder="password" />
                    <div onClick={() => setShowPass(!showPass)}>
                        {showPass ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </label>
                <div className="hover:underline mb-2 cursor-pointer text-gray-700" >
                    <p>Forget Password?</p>
                </div>
                <label>

                    <button type="submit" className="btn w-full font-bold mx-auto block">Login</button>
                </label>
            </form>
            <hr className="my-3" />
            <div className="flex gap-4">

                <button onClick={handleLoginWithGoogle} className="btn btn-outline w-full ">Login with Google</button>


            </div>
            <hr className="my-3" />
            <h1>Don't have an account <Link to='/register' className='text-red-400 underline'>Register Now</Link></h1>
        </div>
    );
};

export default Login;