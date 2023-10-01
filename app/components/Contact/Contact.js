import React from "react";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-base-200" id="contact">
      <div className="hero-content text-center md:text-left lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold mb-5">Contact me:</h1>
          <Form />
        </div>
        <div>
          <a
            href="https://wa.me/59891788790?text=¡Hola Marcos! Vengo de visitar tu pagina de portfolio con Next.js y Tailwind. ¿Cómo estas? ¿Todo bien?"
            target="_blank"
            className="text-slate-300">
            <div className="flex bg-[#1d232a] p-5 rounded-lg mt-8">
              <svg
                fill="#e5e7eb"
                width="52"
                height="52"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M54 9.90039C48.2 4.10039 40.3 0.900391 32.2 0.900391C15.2 0.900391 1.3 14.7004 1.3 31.7004C1.3 37.2004 2.7 42.4004 5.4 47.2004L1 63.1004L17.5 58.9004C22 61.3004 27.1 62.7004 32.3 62.7004C49.2 62.6004 63 48.8004 63 31.7004C63 23.5004 59.8 15.8004 54 9.90039ZM32.1 57.4004C27.6 57.4004 22.9 56.1004 19 53.7004L18 53.1004L8.3 55.6004L11 46.2004L10.4 45.2004C7.9 41.1004 6.5 36.3004 6.5 31.5004C6.5 17.4004 17.9 6.00039 32.1 6.00039C38.9 6.00039 45.3 8.70039 50.1 13.5004C54.9 18.3004 57.6 24.8004 57.6 31.7004C57.8 46.0004 46.2 57.4004 32.1 57.4004ZM46.2 38.2004C45.4 37.8004 41.7 35.9004 40.8 35.8004C40.1 35.5004 39.5 35.4004 39.1 36.2004C38.7 37.0004 37.1 38.6004 36.7 39.2004C36.3 39.6004 35.9 39.8004 35 39.3004C34.2 38.9004 31.8 38.2004 28.8 35.4004C26.5 33.4004 24.9 30.9004 24.6 30.0004C24.2 29.2004 24.5 28.9004 25 28.4004C25.4 28.0004 25.8 27.6004 26.1 27.0004C26.5 26.6004 26.5 26.2004 26.9 25.7004C27.3 25.3004 27 24.7004 26.8 24.3004C26.5 23.9004 25.1 20.1004 24.4 18.5004C23.8 16.9004 23.1 17.2004 22.7 17.2004C22.3 17.2004 21.7 17.2004 21.3 17.2004C20.9 17.2004 19.9 17.3004 19.3 18.2004C18.6 19.0004 16.6 20.9004 16.6 24.7004C16.6 28.5004 19.3 32.0004 19.8 32.7004C20.2 33.1004 25.3 41.0004 32.9 44.4004C34.7 45.2004 36.1 45.7004 37.3 46.1004C39.1 46.7004 40.8 46.5004 42.1 46.4004C43.6 46.3004 46.6 44.6004 47.3 42.7004C47.9 41.0004 47.9 39.3004 47.7 39.0004C47.5 38.8004 46.9 38.5004 46.2 38.2004Z" />
              </svg>

              <div className="ml-5">
                <b>Phone / Whatsapp:</b>
                <div>+598 091 788 790</div>
              </div>
            </div>
          </a>

          <div className="flex bg-[#1d232a] p-5 rounded-lg mt-8">
            <svg
              fill="#e5e7eb"
              width="52"
              height="52"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2">
              <path d="M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z" />
            </svg>

            <div className="ml-5">
              <b>Email:</b>
              <a href="mailto:marcosdarri@hotmail.com">
                <p className="text-slate-300">marcosdarri@hotmail.com</p>
              </a>
              <a href="mailto:marcosdarri@hotmail.com">
                <p className="text-slate-300">marcosdarri2019@hgmail.com</p>
              </a>
            </div>
          </div>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/marcos-darricarrere/"
            rel="noopener noreferrer">
            <div className="flex bg-[#1d232a] p-5 rounded-lg mt-8">
              <svg
                fill="#e5e7eb"
                width="52"
                height="52"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M58.5016 1H5.60156C3.10156 1 1.10156 3 1.10156 5.5V58.5C1.10156 60.9 3.10156 63 5.60156 63H58.3016C60.8016 63 62.8016 61 62.8016 58.5V5.4C63.0016 3 61.0016 1 58.5016 1ZM19.4016 53.7H10.3016V24.2H19.4016V53.7ZM14.8016 20.1C11.8016 20.1 9.50156 17.7 9.50156 14.8C9.50156 11.9 11.9016 9.5 14.8016 9.5C17.7016 9.5 20.1016 11.9 20.1016 14.8C20.1016 17.7 17.9016 20.1 14.8016 20.1ZM53.9016 53.7H44.8016V39.4C44.8016 36 44.7016 31.5 40.0016 31.5C35.2016 31.5 34.5016 35.3 34.5016 39.1V53.7H25.4016V24.2H34.3016V28.3H34.4016C35.7016 25.9 38.6016 23.5 43.1016 23.5C52.4016 23.5 54.1016 29.5 54.1016 37.7V53.7H53.9016Z" />
              </svg>
              <div className="ml-5">
                <b>LinkedIn:</b>
                <p className="text-slate-300">
                  https://www.linkedin.com/in/marcos-darricarrere/
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;