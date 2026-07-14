import React from "react";
import {
  House,
  User,
  FolderKanban,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      icon: <House size={22} />,
    },
    {
      name: "About",
      icon: <User size={22} />,
    },
    {
      name: "Projects",
      icon: <FolderKanban size={22} />,
    },
    {
      name: "Contact",
      icon: <Mail size={22} />,
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
{/* Desktop Navbar */}
<nav className="hidden md:flex fixed top-0 left-0 w-full h-20 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10 z-50">
  <div className="max-w-7xl w-full mx-auto px-8 flex items-center justify-between">
    
    {/* Logo */}
    <h1 className="text-3xl font-bold text-white cursor-pointer">
      Rohit<span className="text-cyan-400">.</span>
    </h1>

    {/* Nav Links */}
    <ul className="flex items-center gap-10">
      <li>
        <a
          href="#home"
          className="text-gray-300 hover:text-cyan-400 transition duration-300"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="text-gray-300 hover:text-cyan-400 transition duration-300"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#projects"
          className="text-gray-300 hover:text-cyan-400 transition duration-300"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#skills"
          className="text-gray-300 hover:text-cyan-400 transition duration-300"
        >
          Skills
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="text-gray-300 hover:text-cyan-400 transition duration-300"
        >
          Contact
        </a>
      </li>
    </ul>

    {/* Button */}
    <button className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition text-white font-medium">
      Resume
    </button>
  </div>
</nav>
      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%]">
        <div className="flex justify-around items-center py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              {item.icon}

              <span className="text-[11px] mt-1">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;