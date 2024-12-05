import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';


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
    // console.log(user, signOutUser);
    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
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
                <a className="btn btn-ghost text-xl">Sports Equipment</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        user?.photoURL ? <img title={user.displayName} src={user.photoURL} className='rounded-full w-12 mx-3' alt="" /> : <FaRegUserCircle title={user.displayName} className='text-4xl mx-3 ' />
                        : null
                }
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Logout</button>
                        : <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;