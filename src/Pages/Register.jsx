import { useContext } from "react";
import { CiImageOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {
    const {  createUserWithEmailPass, setUser } = useContext(authContext)
    const navigate = useNavigate()

    const handleRegisterWithEmailPassowrd = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const passwordRegexLength = /^.{6,}$/;
        if (!passwordRegexLength.test(password)) {
            return toast.error(' Must be at least 6 characters long', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,

            });
        }

        if (!passwordRegex.test(password)) {
            return toast.error(' Must contain uppercase, and lowercase letters', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,

            });
        }

        const user = { name, photo, email, password }
        console.log(user);

        createUserWithEmailPass(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateProfile(user, { displayName: name, photoURL: photo })
                setUser(user)
                navigate('/')
                return toast.success('Registration successful', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,

                });
            })

    }

    
    return (
        <div className="w-96 mx-auto p-10 border-2 rounded-lg my-6">
            <Helmet><title>SE | Register</title></Helmet>
            <h1 className="text-center font-bold text-2xl mb-3">Register Now</h1>
            <form onSubmit={handleRegisterWithEmailPassowrd} >
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input required name="name" type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <CiImageOn />
                    <input required name="photo" type="text" className="grow" placeholder="Photo URL" />
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
                    <input required name="email" type="email" className="grow" placeholder="Email" />
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
                    <input required name="password" type="password" className="grow" placeholder="password" />
                </label>
                <label>
                    <button type="submit" className="btn btn-outline  mx-auto block w-full">Register</button>
                </label>
            </form>
            <hr className="my-3" />
            
            <h1>Already have an account <Link to='/login' className='text-red-400 underline'>Login Now</Link></h1>
        </div>
    );
};

export default Register