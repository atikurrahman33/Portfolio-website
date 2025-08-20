import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto mt-2  fixed top-0 left-0 right-0 backdrop-blur-md bg-blue-200/30 shadow-md z-50">
      {/* Left side: Logo */}
      <div className="navbar-start">
        <a className="text-3xl font-bold text-blue-500">
          Atikur Rahman
        </a>
      </div>

      {/* Right side: Menu + Icons */}
      <div className="navbar-end">
        {/* Menu for large screens */}
        <ul className="menu menu-horizontal hidden lg:flex px-1 space-x-4 text-gray-700 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skill</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Social icons */}
        <div className="flex items-center space-x-3 ml-4 lg:pr-4">
          <a
            href="https://github.com/atikurrahman33"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400  text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/atikur-rahman03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400  text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile dropdown */}
        <div className="dropdown lg:hidden ml-3">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;