import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Home({
  handleModal,
  openLinkedin,
  openGithub,
  openResume,
  moveBackground,
}) {
  return (
    <main
      className="ml-16 md:ml-32 lg:ml-52 mt-20"
      onMouseMove={(event) => moveBackground(event)}
    >
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold">Hey</h1>
      <h1 className="font-semibold text-7xl md:text-8xl lg:text-9xl">
        I'm <span className="text-[#d00000]">Rohan.</span>
      </h1>
      <div className="mt-5">
        <p className="text-xl md:text-xl lg:text-2xl mb-3">
          A{" "}
          <span className="text-[#d00000] font-bold">
            Frontend Software Engineer
          </span>{" "}
          with a strong
        </p>
        <p className="text-xl lg:text-2xl mb-3">
          passion for building web applications
        </p>
        <p className="text-xl lg:text-2xl mb-3">
          with a great user experience.
        </p>
        <p className="text-xl lg:text-2xl mb-3">
          Here's a bit more{" "}
          <button
            onClick={handleModal}
            className="text-[#d00000] px-3 ring-2 ring-[#d00000] rounded-md font-bold hover:bg-[#d00000] hover:text-[#fefefe] transition-all ease duration-200"
          >
            about me.
          </button>
        </p>
        <div className="space-x-3 mt-2">
          <button className="rounded-full p-2 bg-[#d00000] text-[#fefefe] hover:scale-110 transition-all ease duration-300">
            <GrLinkedinOption onClick={openLinkedin} />
          </button>
          <button className="rounded-full p-2 bg-[#d00000] text-[#fefefe] hover:scale-110 transition-all ease duration-300">
            <AiOutlineGithub onClick={openGithub} />
          </button>
          <button className="rounded-full p-2 bg-[#d00000] text-[#fefefe] hover:scale-110 transition-all ease duration-300">
            <FaFilePdf onClick={openResume} />
          </button>
        </div>
      </div>
      <button
        onClick={handleModal}
        className="fixed right-10 bottom-16 bg-secondary rounded-full p-4 hover:scale-110 transition-all ease duration-300 z-20"
      >
        <HiMail className="h-11 w-11 text-secondary" />
      </button>
    </main>
  );
}

export default Home;
