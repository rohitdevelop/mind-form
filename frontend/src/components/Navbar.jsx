import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  CircleCheckBig,
  User,
  LogIn,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: <House size={20} />,
  },
  {
    name: "Todo",
    path: "/todo",
    icon: <CircleCheckBig size={20} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={20} />,
  },
];

const Navbar = () => {
  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto w-full h-20 px-8 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold text-white tracking-wide"
          >
            Todo<span className="text-cyan-400">.</span>
          </NavLink>

          {/* Links */}
          <ul className="flex items-center gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition">
            <LogIn size={18} />
            Login
          </button>
        </div>
      </header>

      {/* ================= Mobile Bottom Navbar ================= */}

      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] z-50">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2 shadow-2xl">
          <div className="flex justify-around">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "text-gray-400 hover:text-cyan-400"
                  }`
                }
              >
                {item.icon}
                <span className="text-[11px] mt-1">
                  {item.name}
                </span>
              </NavLink>
            ))}

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;