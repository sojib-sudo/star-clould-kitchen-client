import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext); 
    // sign out
    const handleLogOut = () => {
        logOut(() => {
          toast.success('Successfully logged out');
        })
        .then()
        .catch(error => console.error(error));
      }

    const menuItems = <>
        <li><Link  className='btn btn-ghost text-black border-none rounded' to='/'>Home</Link></li>
    </>
    const menuItems2 = <>
        <li><Link  className='btn btn-ghost text-black border-none rounded' to='/blog'>Blog</Link></li>
    </>
    const menuItems3 = <>
        <li><Link  className='btn btn-ghost text-black border-none rounded' to='/main-dishes'>Services</Link></li>
    </>
    const menuItems4 = <>
        <li><Link  className='btn btn-ghost text-black border-none rounded' to='/myreview'>My Reviews</Link></li>
    </>
    const menuItems5 = <>
        <li><Link  className='btn btn-ghost text-black border-none rounded' to='/addservice'>Add Services</Link></li>
    </>


    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
        {menuItems}
        {menuItems3}
        {menuItems2}
        {/* {user?.uid ? menuItems4 : ""}
        {user?.uid ? menuItems5 : ""} */}
        { menuItems4 }
        {menuItems5}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl  text-orange-600 font-bold">Star Cloud Kitchen</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 ">
      {menuItems}
      {menuItems3}
      {menuItems2}
      {/* {user?.uid ? menuItems4 : ""}
      {user?.uid ? menuItems5 : ""} */}
      { menuItems4 }
      {menuItems5 }
    </ul>
  </div>
  <div className="navbar-end">
  <Link to="/">
              {
                user?.uid ? 
                <div className='flex'>
                  <Link to='/profile'><span className='text-decoration-none mr-2 align-middle font-bold my-auto'>{user?.displayName}</span></Link>
                  
                  <button className='ml-4 btn btn-secondary bg-orange-500 border-none hover:bg-orange-700'  onClick={handleLogOut}>Log Out</button>
                </div>
                : 
                <>
                  <Link to='/login'><button className="btn btn-secondary bg-orange-500 border-none hover:bg-orange-700">LOGIN</button></Link>

                {/* //   <Link to='/register'>Register</Link> */}
                </>
              }
            </Link>
  </div>
</div>
    );
};

export default Header;