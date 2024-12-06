import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static";
import logo from "../../assets/logo.svg";
import User from "../../assets/User.svg";
import Cart from "../../assets/Cart.svg";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header id="header" className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <nav className="flex justify-center items-center gap-8">
          {LINKS?.map((link) => (
            <NavLink
              key={link.id}
              className={({ isActive }) =>
                `text-slate-800 flex items-center gap-1 px-4 py-2 rounded-md ${
                  isActive ? "bg-[#004b23] text-white" : "hover:bg-gray-200"
                }`
              }
              to={link.path}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <img src={User} alt="User" className="h-8 cursor-pointer" />
          <img src={Cart} alt="Cart" className="h-8 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
