import React from 'react'
import Image from "next/image";
import heroImage from "../../../public/about-image.png";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 p-32">
      <div className="hero-content text-center flex-col md:text-left lg:flex-row">
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
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to my Portfolio!</h1>
          <p className="py-6">
            Welcome to my Portfolio, this website was created using Next.js,
            React, and Tailwind. Click in the button below to get to know me a
            little better.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default About