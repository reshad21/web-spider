import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Pages/contexts/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => { });
    }

    const menuItems = <>
        <li><a href='/'>Home</a></li>
        <li tabIndex={0}>
            <a href='/'>
                Courses
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
                <li><a href='/'>Submenu 1</a></li>
                <li><a href='/'>Submenu 2</a></li>
            </ul>
        </li>
        <li><a href='/'>Contact</a></li>
        <li><a href='/'>About Us</a></li>
        {
            (user?.displayName) ?
                <li><Link onClick={handleLogOut} >Logout</Link></li>
                :
                <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar justify-between lg:px-16 sticky top-0 z-30 w-full backdrop-blur">

            {/* responsive menu start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href='/'>WebSpiderBd</a>
            </div>

            {/* large device menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navber;