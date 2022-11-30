import React from "react";
import Project1 from "../assets/cryptobase.png";
import Project2 from "../assets/netflix.png";
import Project3 from "../assets/amazon.png";
import Project4 from "../assets/ultraverse.png";
import { ImLink, ImGithub } from "react-icons/im";

function Projects({ moveBackground }) {
  return (
    <div id="projects" className="z-50 mt-60 lg:mt-40">
      <h1 className="text-center text-5xl font-medium md:px-7 md:text-6xl lg:text-7xl">
        Some of my <span className="text-[#d00000] font-bold">Projects:</span>
      </h1>
      <main
        className="max-w-[1100px] flex flex-col space-y-32 md:space-y-40 w-full mx-auto my-20 lg:mt-40 z-50 md:px-10 lg:px-0"
        onMouseMove={(event) => moveBackground(event)}
      >
        {/* Left */}

        <div className="flex md:flex-row flex-col">
          <div className="md:w-3/7 w-[90%] mx-auto">
            <h1 className="md:text-5xl text-4xl font-bold">Cryptobase</h1>
            <span className="text-sm font-bold text-[#d00000] lg:text-base">
              React, Tailwind, Javascript, Firebase, Coin Gecko API, Routes
            </span>
            <p className="md:mt-5 mt-2 text-sm lg:text-base">
              A cryptocurrency application that displays real-time data of the
              top cryptocurrencies in the market. This app allows users to
              create a new account using their email address and can then sign
              in to save coins to a user specific list. This is made possble by
              creating a firestore cloud storage database at the time of user
              registration. Another feature of this application is dynamic
              routing through the "React Router DOM" package.
            </p>
            <div className="text-[#d00000] flex space-x-4 md:mt-11 mt-3">
              <ImLink
                onClick={() => window.open("https://cryptobase-aa9a4.web.app/")}
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
              <ImGithub
                onClick={() =>
                  window.open("https://github.com/chowdhuryrz/cryptobase")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
            </div>
          </div>
          <div className="md:w-4/7 drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:scale-105 transition-all ease-in duration-150 md:ml-6 mx-auto w-[90%] lg:mt-0 mt-5">
            <img
              onClick={() => window.open("https://cryptobase-aa9a4.web.app/")}
              alt=""
              src={Project1}
              className="rounded-md object-contain cursor-pointer h-full"
            />
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col">
          <div className="md:w-3/7 w-[90%] mx-auto">
            <h1 className="md:text-5xl text-4xl font-bold">Netflix Clone</h1>
            <span className="text-sm font-bold text-[#d00000] lg:text-base">
              React, Tailwind, Javascript, Firebase, IMDB API
            </span>
            <p className="md:mt-5 mt-2 text-sm lg:text-base">
              A movie streaming app that features different categories of
              movies. This app features user authentication with firebase as
              well as the firestore cloud storage database. This application is
              pulling movie data from an the IMDB movie API and displaying
              different categories. It features horizontal sliding and a
              featured selection. The useContext hook is also being implemented
              for app-wide state management.
            </p>
            <div className="text-[#d00000] flex space-x-4 md:mt-11 mt-3">
              <ImLink
                onClick={() =>
                  window.open("https://netflix-clone-7c1a0.web.app")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
              <ImGithub
                onClick={() =>
                  window.open("https://github.com/chowdhuryrz/netflix-clone")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
            </div>
          </div>
          <div className="md:w-4/7 drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:scale-105 transition-all ease-in duration-150 md:mr-6 mx-auto w-[90%] lg:mt-0 mt-5">
            <img
              onClick={() => window.open("https://netflix-clone-7c1a0.web.app")}
              alt=""
              src={Project2}
              className="rounded-md object-contain cursor-pointer h-full"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-3/7 w-[90%] mx-auto">
            <h1 className="md:text-5xl text-4xl font-bold">Amazon Clone</h1>
            <span className="text-sm font-bold text-[#d00000] lg:text-base">
              React, Tailwind, Javascript, Firebase, Redux, Fake Store API
            </span>
            <p className="md:mt-5 mt-2 text-sm lg:text-base">
              A fully responsive e-commerce application app that features a
              variety of products fetched from Fake Store API, cart
              functionality with redux and secure user sign-in and sign-out with
              firebase.
            </p>
            <div className="text-[#d00000] flex space-x-4 md:mt-11 mt-3">
              <ImLink
                onClick={() =>
                  window.open("https://fourth-jigsaw-365219.web.app/")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
              <ImGithub
                onClick={() =>
                  window.open("https://github.com/chowdhuryrz/amazon-clone")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
            </div>
          </div>
          <div className="md:w-4/7 drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:scale-105 transition-all ease-in duration-150 md:ml-6 mx-auto w-[90%] lg:mt-0 mt-5">
            <img
              onClick={() =>
                window.open("https://fourth-jigsaw-365219.web.app/")
              }
              alt=""
              src={Project3}
              className="rounded-md object-contain cursor-pointer h-full"
            />
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col">
          <div className="md:w-3/7 w-[90%] mx-auto">
            <h1 className="md:text-5xl text-4xl font-bold">Ultraverse</h1>
            <span className="text-sm font-bold text-[#d00000] lg:text-base">
              Html, CSS, Javascript, React
            </span>
            <p className="md:mt-5 mt-2 text-sm lg:text-base">
              An NFT Marketplace app created to buy, sell and trade NFT's. This
              fully responsive website pulls data from a cloud API and includes
              library integration for multiple features, and includes dynamic
              routing to different pages.{" "}
            </p>
            <div className="text-[#d00000] flex space-x-4 md:mt-11 mt-3">
              <ImLink
                onClick={() =>
                  window.open("https://ultraverse-nft-marketpla-6c638.web.app/")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
              <ImGithub
                onClick={() =>
                  window.open("https://github.com/chowdhuryrz/rohan-internship")
                }
                className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-out duration-300"
              />
            </div>
          </div>
          <div className="md:w-4/7 drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:scale-105 transition-all ease-in duration-150 md:mr-6 mx-auto w-[90%] lg:mt-0 mt-5">
            <img
              onClick={() =>
                window.open("https://ultraverse-nft-marketpla-6c638.web.app/")
              }
              alt=""
              src={Project4}
              className="rounded-md object-contain cursor-pointer h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
