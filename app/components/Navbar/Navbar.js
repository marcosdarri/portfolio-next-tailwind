import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl w-1/5">Home</a>
      </div>
      <div className="navbar-end hidden md:flex w-4/5 justify-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Portfolios</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            style={{ right: "0px" }}>
            <li className="h-10 items-center">
              <a className="w-full">About</a>
            </li>
            <li className="h-10 items-center">
              <a className="w-full">Resume</a>
            </li>
            <li className="h-10 items-center">
              <a className="w-full">Portfolios</a>
            </li>
            <li className="h-10 items-center">
              <a className="w-full">Blogs</a>
            </li>
            <li className="h10 items-center">
              <a className="w-full">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
