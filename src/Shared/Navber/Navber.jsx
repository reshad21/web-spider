import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Pages/contexts/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.photoURL);
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
        <li><Link to='/home'>Home</Link></li>
        <li tabIndex={0}>
            <Link to='/'>
                Courses
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-success">
                <li><Link to='/'>Submenu 1</Link></li>
                <li><Link to='/'>Submenu 2</Link></li>
            </ul>
        </li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        {
            (user?.displayName) ?
                <li tabIndex={0}>
                    <Link onClick={handleLogOut} >
                        <img src={user?.photoURL} alt="" className='w-10 h-10 object-cover rounded-full' />
                    </Link>
                    <ul className="p-2 bg-slate-700 text-white">
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                        <li><Link to='/dashbord'>Dashbord</Link></li>
                    </ul>
                </li>
                :
                <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar justify-between lg:px-16 sticky top-0 z-30 w-full  bg-success text-white">

            {/* responsive menu start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">WebSpiderBd</Link>
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