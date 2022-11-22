function Footer({
  openLinkedin,
  openGithub,
  openResume,
  handleModal,
  moveBackground,
}) {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="drop-shadow-[0_70px_60px_rgba(0,0,0,0.45)]]"
      onMouseMove={(event) => moveBackground(event)}
    >
      <footer className="flex relative bg-primary py-12 w-full z-10">
        <div className="mx-auto w-full px-10">
          <div className="flex flex-col items-center ">
            <h1
              onClick={toTop}
              className="text-primary text-5xl tracking-wider cursor-pointer"
            >
              r<span className="text-[#d00000]">c</span>
            </h1>
            <div className="w-full max-w-[500px] flex justify-between mt-8">
              <li
                onClick={openLinkedin}
                className="text-primary underliner underliner-black"
              >
                LinkedIn
              </li>
              <li
                onClick={openGithub}
                className="text-primary underliner underliner-black"
              >
                Github
              </li>
              <li
                onClick={handleModal}
                className="text-primary underliner underliner-black"
              >
                Contact
              </li>
              <li
                onClick={openResume}
                className="text-primary underliner underliner-black"
              >
                Resume
              </li>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
