import { Link, NavLink, useNavigate, } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext, useEffect, useState } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from "../../../Firebase/AuthProvider/AuthProvider";



const Navbar = () => {
  const [theme, setTheme] = useState('light');
  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])
  const handleToggle = (e)=>{
    console.log(theme)
    if(e.target.checked){
      setTheme('synthwave')
    } else{
      setTheme('light')
    }
  }
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      })
  }

  const navLink = <div className="flex items-center">
    <li className="font-bold text-base hover:text-[#b18b5e] hover:border-b border-b-[#b18b5e]"><NavLink to='/' className={({ isActive }) => isActive ? '  text-[#b18b5e]' : 'text-[#131313CC] hover:text-[#b18b5e]'}>Home</NavLink></li>

    <li className="font-bold text-base hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/addCraftItem' className={({ isActive }) => isActive ? 'text-[#b18b5e] ' : 'hover:text-[#b18b5e] text-[#131313CC]'}>Add Craft Item</NavLink></li>

    <li className="font-bold text-base hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/myArtCraft' className={({ isActive }) => isActive ? 'text-[#b18b5e] ' : 'hover:text-[#b18b5e] text-[#131313CC]'}>My Art&Craft List</NavLink></li>

    <li className="font-bold text-base hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/allArtCraft' className={({ isActive }) => isActive ? 'text-[#b18b5e] ' : 'hover:text-[#b18b5e] text-[#131313CC]'}>All Art & craft Items</NavLink></li>



    {/* { user && <>
      <li><NavLink to='/contactUs' className={({ isActive }) => isActive ? 'border border-green-600 text-[#23BE0A]' : 'text-[#131313CC]'}>Contact Us</NavLink></li> */}

  </div>
  return (
    <div className="navbar max-w-6xl mx-auto mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-xs dropdown-content mt-3 z-[1] p-1  w-52">
            {navLink}
          </ul>
        </div>
        <div>
          <img className="w-44" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
      <label className="cursor-pointer grid place-items-center mr-3">
              <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
              <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        {user ?
          <div className="flex items-center gap-1 lg:gap-5">
            
            <div className="">
              <img className="object-cover w-10 lg:w-16 h-10 lg:h-16 rounded-full ring ring-gray-300 dark:ring-gray-600 my-anchor-element" src={user?.photoURL || 'Image not found'} alt="" />
              <Tooltip className="z-20" variant="info" anchorSelect=".my-anchor-element" place="top">
                {user?.displayName}
              </Tooltip>

            </div>
            {/* <p>{user?.displayName || 'mansur abdullah'}</p> */}
            <Link to='/'>
              <button onClick={handleLogOut} className="px-1 lg:px-3 font-semibold text-xs lg:text-base text-white bg-[#b18b5e] rounded py-2">Sign out</button>
            </Link>
          </div> :
          <div>
            <Link to='/login'>
              <button className="px-2 lg:px-3 font-semibold text-xs lg:text-base text-white bg-[#b18b5e] rounded py-2">Login</button>
            </Link>
            <Link to='/register'>
              <button className="px-2 lg:px-3 ml-1 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#b18b5e] rounded py-2">Register</button>
            </Link>
          </div>
        }
        {/* <div>
          <Link to='/login'>
            <button className="px-3 font-semibold text-base text-white bg-[#b18b5e] rounded py-2">Login</button>
          </Link>
          <Link to='/register'>
            <button className="px-3 ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded py-2">Register</button>
          </Link>
        </div> */}
      </div>
    </div >
  );
};

export default Navbar;