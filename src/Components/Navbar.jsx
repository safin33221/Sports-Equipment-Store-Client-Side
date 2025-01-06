import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';
import logo from "../assets/logo.png";
import { toast } from 'react-toastify';


const Navbar = () => {
    const { user, signOutUser } = useContext(authContext)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/SportsEquipment'>All Sports Equipment</NavLink></li>
        {
            user && <>
                <li><NavLink to='/AddEquipment'>Add Equipment </NavLink></li>
                <li><NavLink to={`/MyEquipmentList/${user.email}`}>My Equipment List</NavLink></li>
            </>
        }
    </>
    
    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                return toast.success('Log Out successful', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,

                });
            })
            .catch(error => {

            })
    }
    return (
        <div className="navbar fixed px-20   z-50 backdrop-blur-sm  ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className="w-10  h-10 rounded-full" src={logo} alt="" />
                <a className=" mx-3 font-bold  text-2xl hidden md:flex">Sports Equipment</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        user?.photoURL ? <img title={user.displayName} src={user.photoURL} className='rounded-full w-12 h-1/2 mx-3' alt="" /> : <FaRegUserCircle title={user.displayName} className='text-4xl mx-3 ' />
                        : null
                }
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Log Out</button>
                        : <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;