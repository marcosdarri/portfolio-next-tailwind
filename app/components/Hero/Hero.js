import React from "react";
import heroImage from "../../../public/hero-image.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col md:text-left lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Welcome to my Portfolio!</h1>
          <p className="py-6">
            Welcome to my Portfolio, this website was created using Next.js,
            React, and Tailwind.
            <br></br>
            Click in the button below to get to know me a little better.
          </p>
          <button className="btn btn-primary">Get Started</button>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hero;
