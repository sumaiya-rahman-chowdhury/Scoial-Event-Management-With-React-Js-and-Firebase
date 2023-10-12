import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <div className=" bg-black p-10">
            <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <a
        to='/' className=" cursor-pointer"
      >
        <img src="/logo.ico" alt=""  className=" h-[90px]"/>
      </a>
  <ul className="items-center gap-6 flex text-white">
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink  className="flex items-center " to='/'>
            Home
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center"  to='/services'>
           Services
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center" to=''>
            About
          </NavLink>
        </li>
        <li className="block p-1  text-sm font-normal leading-normal  antialiased">
          <NavLink className="flex items-center" to=''>
           Contact Us
          </NavLink>
        </li>
      </ul>
</footer>
        </div>
    );
};

export default Footer;