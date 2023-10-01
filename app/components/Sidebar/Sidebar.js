import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/about-image.png";

const Sidebar = ({ children }) => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content border-r-2 border-indigo-500 pt-20 relative justify-between">
          {/* Sidebar content here */}
          <div className="flex justify-center mt-10">
            <Image
              alt="Hero Image"
              src={heroImage}
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                width: "200px !important",
                height: "200px !important",
              }}
              className="flex self-center border-2 border-indigo-500"
            />
          </div>
          <div className="mb-12">
            <li>
              <Link href="#home" className="flex justify-center h-16 text-base">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="flex justify-center h-16 text-base">
                About
              </Link>
            </li>
            <li>
              <Link
                href="#resume"
                className="flex justify-center h-16 text-base">
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="flex justify-center h-16 text-base">
                Portfolios
              </Link>
            </li>
            <li>
              <Link
                href="#blogs"
                className="flex justify-center h-16 text-base">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="flex justify-center h-16 text-base">
                Contact
              </Link>
            </li>
          </div>

          <div class="w-full h-full">
            <p className="text-center absolute inset-x-0 bottom-0 mb-5">
              Copyright © 2023 - All right reserved by Marcos Darricarrere
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
