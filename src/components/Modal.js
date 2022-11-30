import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import HTML from "../assets/html-logo.png";
import CSS from "../assets/css-logo.png";
import JS from "../assets/js-logo.png";
import REACT from "../assets/react-logo.png";
import TAILWIND from "../assets/tailwind-logo.png";
import FIREBASE from "../assets/firebase-logo.png";
import NEXT from "../assets/nextjs-logo.png";

function Modal({ openModal, moveBackground }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div
      onMouseMove={(event) => moveBackground(event)}
      className="max-w-[1100px] h-[700px] flex flex-col absolute md:flex-row-reverse mx-auto w-full md:w-[90%] modal drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)] z-50"
    >
      {/* Right */}
      {loading ? (
        <div className="flex flex-col bg-[#242424] text-white w-full lg:w-[50%] px-20 py-10 lg:justify-center lg:rounded-r-3xl transition-all ease-in duration-300">
          <HiX
            onClick={() => openModal(false)}
            className="absolute w-10 h-10 top-10 right-10 cursor-pointer hover:scale-110 transition-all duration-75 active:scale-90"
          />
        </div>
      ) : (
        <div className="flex flex-col bg-[#242424] text-white w-full lg:w-[50%] px-20 py-10 lg:justify-center lg:rounded-r-3xl transition-all ease-in duration-300">
          <HiX
            onClick={() => openModal(false)}
            className="absolute w-10 h-10 top-10 right-10 cursor-pointer hover:scale-110 transition-all duration-75 active:scale-90"
          />
          <h1 className="text-3xl font-bold mb-5">Let's have a chat!</h1>
          <p className="font-bold mb-2">
            I'm currently open to new opportunities
          </p>
          <form
            action="https://getform.io/f/fd602632-7371-4210-93e5-c2c2c8af3169"
            method="POST"
            className="flex flex-col"
          >
            <label className="font-bold">Name</label>
            <input
              name="name"
              type="text"
              required
              className="bg-transparent border-b-4 border-white outline-none focus:border-b-4 focus:border-b-[#d00000] py-2 mb-5"
            />
            <label className="font-bold">Email</label>
            <input
              type="email"
              required
              className="bg-transparent border-b-4 border-white outline-none focus:border-b-4 focus:border-b-[#d00000] py-2 mb-5"
            />
            <label className="font-bold">Message</label>
            <textarea
              name="message"
              required
              className="bg-transparent border-b-4 border-white outline-none focus:border-b-4 focus:border-b-[#d00000] mb-5 py-2"
            />
            <button
              type="submit"
              className="bg-[#d00000] rounded-lg py-3 font-bold hover:ring-2 hover:ring-white hover:bg-inherit transition-all ease duration-300 text-xl"
            >
              Send it my way
            </button>
          </form>
        </div>
      )}

      {/* Left */}
      <div className="bg-[#f5f5f5] w-full lg:w-[50%] px-20 py-10 flex flex-col text-[#242424] lg:rounded-l-3xl lg:justify-center relative">
        <h1 className="font-bold text-3xl mb-4">Here's a bit about me.</h1>
        <h3 className="font-bold mb-2 text-[#d00000]">
          Frontend Software Engineer
        </h3>
        <p className="lg:text-lg md:text-base text-base">
          I'm a 20 year-old frontend software engineer with a passion for
          creating{" "}
          <span className="font-semibold text-[#d00000]">
            beautiful and compelling web applications.
          </span>{" "}
          I strive to surpass and improve my work continuously while solving{" "}
          <span className="font-semibold text-[#d00000]">
            challenging engineering problems
          </span>{" "}
          with a team of talented and experienced software engineers every day.
        </p>
        <div className="flex flex-wrap items-center -ml-4 hover:transform hover:scale-100">
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-75">
            <img
              src={HTML}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="language text-[#e34c26]">HTML</h3>
          </div>
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-100">
            <img
              src={CSS}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="absolute -bottom-2 transform scale-0 transition-all ease-in duration-100 hover:transform hover:scale-100 text-[#e34c26]">
              HTML
            </h3>
          </div>
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-100">
            <img
              src={JS}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="absolute -bottom-2 transform scale-0 transition-all ease-in duration-100 hover:transform hover:scale-100 text-[#e34c26]">
              HTML
            </h3>
          </div>
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-100">
            <img
              src={REACT}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="absolute -bottom-2 transform scale-0 transition-all ease-in duration-100 hover:transform hover:scale-100 text-[#e34c26]">
              HTML
            </h3>
          </div>
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-100">
            <img
              src={TAILWIND}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="absolute -bottom-2 transform scale-0 transition-all ease-in duration-100 hover:transform hover:scale-100 text-[#e34c26]">
              HTML
            </h3>
          </div>
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-100">
            <img
              src={FIREBASE}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="absolute -bottom-2 transform scale-0 transition-all ease-in duration-100 hover:transform hover:scale-100 text-[#e34c26]">
              HTML
            </h3>
          </div>
          <div className="w-1/4 p-4 relative flex flex-col items-center transition-all ease-in duration-100">
            <img
              src={NEXT}
              className="h-20 w-20 object-contain hover:scale-90 transition-all ease-in duration-75"
              alt=""
            />
            <h3 className="absolute -bottom-2 transform scale-0 transition-all ease-in duration-100 hover:transform hover:scale-100 text-[#e34c26]">
              HTML
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
