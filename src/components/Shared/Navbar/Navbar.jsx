import { Link, NavLink, useNavigate, } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider/AuthProvider";



const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () =>{
    logOut()
    .then(result => {
      console.log(result.user);
      navigate('/');
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const navLink = <div className="flex items-center">
    <li className="font-bold text-base hover:text-[#b18b5e] hover:border-b border-b-[#b18b5e]"><NavLink to='/' className= {({ isActive }) => isActive ? '  text-[#b18b5e]' : 'text-[#131313CC] hover:text-[#b18b5e]'}>Home</NavLink></li>

    <li className="font-bold text-base hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/addCraftItem' className={({ isActive }) => isActive ? 'text-[#b18b5e] ' :'hover:text-[#b18b5e] text-[#131313CC]'}>All Art & craft Items</NavLink></li>

    <li className="font-bold text-base hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-[#b18b5e] ' :'hover:text-[#b18b5e] text-[#131313CC]'}>All Art & craft Items</NavLink></li>

    <li className="font-bold text-base hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-[#b18b5e] ' :'hover:text-[#b18b5e] text-[#131313CC]'}>All Art & craft Items</NavLink></li>

    

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
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-52">
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
      {user ?
         <div className="flex items-center gap-5">
          <div className="tooltip tooltip-bottom" data-tip={user?.displayName || 'mansur abdullah'}>
          <img className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600" src={user?.photoURL || 'Image not found'} alt="" />
          {/* <img src={user.photoURL} alt="" /> */}
          </div>
          {/* <p>{user?.displayName || 'mansur abdullah'}</p> */}
          <Link to='/'>
            <button onClick={handleLogOut} className="px-3 font-semibold text-base text-white bg-[#b18b5e] rounded py-2">Sign out</button>
          </Link>
        </div> : 
        <div>
          <Link to='/login'>
            <button className="px-3 font-semibold text-base text-white bg-[#b18b5e] rounded py-2">Login</button>
          </Link>
          <Link to='/register'>
            <button className="px-3 ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded py-2">Register</button>
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
    </div>
  );
};

export default Navbar;