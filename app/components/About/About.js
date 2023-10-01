import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../../public/tomando-mate.png";

const About = () => {
  const downloadFile = () => {
    "https://drive.google.com/uc?export=download&id=17GvspprTeHkuCFYDXa0uMdH1QmWIxhVq";
  };
  return (
    <div className="hero min-h-screen bg-base-200 p-32" id="about">
      <div className="hero-content text-center flex-col md:text-left lg:flex-row">
        <Image
          alt="About Image"
          src={aboutImage}
          width={400}
          height={400}
          style={{
            borderRadius: "10%",
            width: "400px !important",
            height: "400px !important",
          }}
        />
        <div>
          <h3 className="text-5xl font-bold">Marcos Darricarrere</h3>
          <p className="py-6">
            I&rsquo;m a frontend web developer. I can provide clean code and
            pixel perfect design. I also make website more & more interactive
            with web animations.
          </p>
          <p>
            <b>Full Name: </b>Marcos Darricarrere.
          </p>
          <p>
            <b>Age: </b>28 years old.
          </p>
          <p>
            <b>Nacionality: </b>Uruguaian.
          </p>
          <p>
            <b>Languages: </b>English, Spanish.
          </p>
          <p>
            <b>Freelance: </b>Available.
          </p>
          <Link href="#resume">
            <button className="btn btn-primary mr-5 mt-14 mb-2">
              Go to Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
