import React from "react";
import Link from "next/link";
import style from "./style.module.css";

const Hero = () => {
  return (
    <div className={`hero min-h-screen bg-base-200 ${style.hero}`}>
      <div className="hero-content text-center flex-col md:text-left lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Welcome to my Portfolio!</h1>
          <p className="py-6">
            Welcome to my Portfolio, this website was created using Next.js,
            React, and a Tailwind library called DaisyUI.
            <br></br>
            Click in the button below to get to know me a little better.
          </p>
          <Link href="#about">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
