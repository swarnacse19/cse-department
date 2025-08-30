import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "People", path: "/people" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Seminar/Workshop", path: "/seminar" },
    { name: "Citizens Charter", path: "/citizens-charter" },
    { name: "Notice", path: "/notice" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar bg-base-200 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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

        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/20/University_of_Barishal_logo.png"
            alt="University Logo"
            className="w-8 h-8 mr-2"
          />
          University of Barishal
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
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
  );
};

export default Navbar;
