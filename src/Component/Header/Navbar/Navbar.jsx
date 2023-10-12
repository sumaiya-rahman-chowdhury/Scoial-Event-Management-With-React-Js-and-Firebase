import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../Authentication";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const [show,setShow] = useState(true)
  console.log(show)
  const {user,logOut} = useContext(AuthenticationContext)
    return (
        <div className=" font-poppins">
            <nav className=" shadow-lg mb-10 shadow-gray-300">
  <div>
    <div className="container mx-auto flex items-center justify-between text-gray-900">
      <a
        to='/' className=" cursor-pointer"
      >
        <img src="/logo.ico" alt=""  className=" h-[80px]"/>
      </a>
      <ul className="ul-navbar hidden items-center gap-6 lg:flex">
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink  className="flex items-center  font-bold" to='/'>
            Home
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold"  to='/services'>
           Services
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold" to='/about'>
            About
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold" to='/contact'>
           Contact Us
          </NavLink>
        </li>
        {
          user?     <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold" to='/profile'>
           <AiOutlineShoppingCart className=" text-2xl"></AiOutlineShoppingCart>
          </NavLink>
        </li> : ''
        }
      </ul>
    {
      user? <div className=" flex items-center gap-2">
        <img src={user.photoURL} alt="" className=" w-[50px] h-[50px] rounded-full" />
        <h1>{user.displayName}</h1>
      </div> :  <Link to='/login'> <button
      className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
      type="button"
      data-ripple-light="true"
    >
      <span>Login</span>
    </button></Link>
    }
      {
      user?<button onClick={()=>logOut()}
      className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
      type="button"
      data-ripple-light="true"
    >
      <span>Log Out</span>
    </button> : " "
    }

      <button
        className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center  text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        data-collapse-target="navbar" onClick={()=>setShow(!show)}
      >
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div
      className="flex w-full shadow-lg lg:hidden"
      
    >
      <div className={`${show ? ' hidden' : ''} w-full `}>
        <ul className="mt-2 mb-4 flex flex-col gap-2">
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink  className="flex items-center  font-bold" to='/'>
            Home
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold"  to='/services'>
           Services
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold" to='/about'>
            About
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center  font-bold" to='/contact'>
           Contact Us
          </NavLink>
        </li>
        </ul>
      {
      user?<button onClick={()=>logOut()}
      className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
      type="button"
      data-ripple-light="true"
    >
      <span>Log Out</span>
    </button> : <Link to='/login'> <button
      className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
      type="button"
      data-ripple-light="true"
    >
      <span>Login</span>
    </button></Link>
    }
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;