import { Link, NavLink } from "react-router";
import cse from "../assets/cse.jpg";
import bu from "../assets/bu.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Faculty", path: "/faculty" },
    { name: "Research", path: "/research" },
    { name: "Programs", path: "/programs" },
    { name: "Students", path: "/students" },
    { name: "Notice", path: "/notice" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-base-200 shadow-md">
      {/* 🔹 Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white font-semibold md:px-14">
        <div className="flex items-center gap-2">
          <img src={bu} alt="University Logo" className="w-8 h-8 bg-white rounded-sm" />
          <span className="text-lg">UNIVERSITY OF BARISHAL</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={cse} alt="CSE Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</span>
        </div>
      </div>

      {/* 🔹 Navigation Bar */}
      <div className="navbar bg-base-100">
        {/* Mobile Dropdown */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-primary font-semibold" : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Menu (Right Aligned) */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
