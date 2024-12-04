import { useContext } from "react";
import { CiImageOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUserWithGoogle } = useContext(authContext)

    const handleRegisterWithGoogle = e => {
        createUserWithGoogle()
            .then(result => {
                console.log(result);
            })
            .catch(error=>{
                console.log(error);
            })
    }
    return (
        <div className="w-96 mx-auto p-10 border-2 rounded-lg">
            <h1 className="text-center font-bold text-2xl mb-3">Register Now</h1>
            <form  >
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <CiImageOn />
                    <input type="text" className="grow" placeholder="Photo URL" />
                </label>
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
                    <input type="email" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2">
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
                    <input type="password" className="grow" placeholder="password" />
                </label>
                <label>
                    <button className="btn mx-auto block w-40">Register</button>
                </label>
            </form>
            <hr className="my-3" />
            <div className="flex gap-4">
                <h1 className="font-bold text-xl">Login With:</h1>
                <button onClick={handleRegisterWithGoogle} className="btn btn-outline btn-sm">Google</button>
                <button className="btn btn-outline btn-sm">Facebook</button>

            </div>
            <hr className="my-3" />
            <h1>Already have an account <Link to='/login' className='text-red-400 underline'>Login Now</Link></h1>
        </div>
    );
};

export default Register