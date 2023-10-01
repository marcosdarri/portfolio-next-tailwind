'use client'
import React from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {

  const notify = () =>  toast.success("CV was downloaded successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    // Posicionarlo por debajo del navbar, cambiarle el color a un verde DaisyUI #36d399, pasar la letra a minuscula. Letra gris oscura.

  return (
    <div className="navbar bg-base-100 fixed z-10 justify-between md:justify-end">
      <div className="navbar-start md:hidden">
        <a className="btn btn-ghost normal-case text-xl w-1/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
      </div>
      <div>
        <button className="btn btn-primary mr-5 mt-2 mb-2" onClick={notify}>
          <Link href="https://drive.google.com/uc?export=download&id=17GvspprTeHkuCFYDXa0uMdH1QmWIxhVq">
            Download CV
          </Link>
          <ToastContainer />
        </button>

        <label
          className="btn btn-circle swap swap-rotate navbar-end w-12 md:hidden mr-5"
          htmlFor="my-drawer">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
