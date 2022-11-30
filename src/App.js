import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Background from "./components/Background";
import { ThemeProvider } from "./context/ThemeContext";

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
          <Background />

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
