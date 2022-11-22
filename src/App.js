import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ThemeProvider } from "./context/ThemeContext";
import Circle from "./assets/circle.svg";
import Triangle from "./assets/triangle.svg";
import Eclipse from "./assets/eclipse.svg";
import Star from "./assets/star.svg";
import Resume from "./assets/resume.pdf";

function App() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/rohancho/");
  };
  const openGithub = () => {
    window.open("https://github.com/chowdhuryrz");
  };
  const openResume = () => {
    window.open(Resume);
  };

  const scaleFactor = 1 / 20;

  function moveBackground(event) {
    const shapes = document.querySelectorAll("#shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px) rotate(${x * 5}deg)`;
    }

    const circles = document.querySelectorAll(".circle");
    for (let i = 0; i < circles.length; i++) {
      const isEven = i % 2 === 0;
      const boolInt = isEven ? -1 : 1;
      circles[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px)`;
    }
    const stars = document.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
      const isEven = i % 2 === 0;
      const boolInt = isEven ? -1 : 1;

      stars[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px) rotate(${x * 2.5}deg)`;
    }
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="bg-primary text-primary">
          <img
            id="shape"
            src={Circle}
            alt=""
            className="w-20 h-20 fixed left-20 top-72 select-none circle"
          />
          <img
            id="shape"
            src={Circle}
            alt=""
            className="w-20 h-20 fixed right-72 top-96 select-none circle"
          />
          <img
            id="shape"
            src={Triangle}
            alt=""
            className="w-28 h-28 fixed right-24 top-52 select-none"
          />
          <img
            id="shape"
            src={Triangle}
            alt=""
            className="w-28 h-28 fixed left-[600px] top-64 select-none"
          />
          <img
            id="shape"
            src={Triangle}
            alt=""
            className="w-28 h-28 fixed left-24 top-[500px] select-none"
          />
          <img
            id="shape"
            src={Eclipse}
            alt=""
            className="w-28 h-28 fixed left-72 top-96 select-none"
          />
          <img
            id="shape"
            src={Eclipse}
            alt=""
            className="w-28 h-28 fixed left-[700px] top-[500px] select-none"
          />
          <img
            id="shape"
            src={Star}
            alt=""
            className="w-28 h-28 fixed left-20 top-24 select-none star"
          />
          <img
            id="shape"
            src={Star}
            alt=""
            className="w-28 h-28 fixed right-[500px] top-44 select-none star"
          />
          <img
            id="shape"
            src={Star}
            alt=""
            className="w-28 h-28 fixed right-56 bottom-0 select-none star"
          />
          <img
            id="shape"
            src={Eclipse}
            alt=""
            className="w-28 h-28 fixed left-[500px] top-20 select-none"
          />
          <Navbar openModal={handleModal} moveBackground={moveBackground} />

          {modal && (
            <Modal openModal={setModal} moveBackground={moveBackground} />
          )}
          <Home
            handleModal={handleModal}
            openLinkedin={openLinkedin}
            openGithub={openGithub}
            openResume={openResume}
            moveBackground={moveBackground}
          />
          <Projects moveBackground={moveBackground} />
          <Footer
            handleModal={handleModal}
            openLinkedin={openLinkedin}
            openGithub={openGithub}
            openResume={openResume}
            moveBackground={moveBackground}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
