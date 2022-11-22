import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Navbar({ openModal, moveBackground }) {
  const toProject = () => {
    window.scrollTo({
      top: "730",
      behavior: "smooth",
    });
  };

  return (
    <div
      className="px-12 lg:px-28 pt-8"
      onMouseMove={(event) => moveBackground(event)}
    >
      <header className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-5xl tracking-wider text-primary cursor-pointer">
            r<span className="text-[#d00000]">c</span>
          </h1>
        </Link>
        <div className="space-x-4 lg:space-x-6 flex items-center">
          <li
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="500"
            onClick={() => openModal(true)}
            className="underliner underliner-black"
          >
            About
          </li>
          <li
            onClick={toProject}
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="750"
            className="underliner underliner-black"
          >
            Projects
          </li>
          <li
            data-aos="fade-left"
            data-aos-delay="750"
            data-aos-duration="1000"
            onClick={() => openModal(true)}
            className="underliner underliner-black"
          >
            Contact
          </li>
          <li
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1250"
            className="underliner underliner-black"
          >
            <ThemeToggle />
          </li>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
