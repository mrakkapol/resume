import React, { useState } from "react";

function Headder() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="max-w-[1450px] h-full pb-20 bg-slate-300">
        <nav className="max-w-[1450px] fixed top-0 w-full z-50 bg-gray-800 text-white p-4 flex justify-between md:flex md:items-center">
          <div className="text-2xl text-gray-400 font-bold">
            Akka<span className="text-gray-600">pol</span>
          </div>

          <div className="md:flex items-center space-x-4 hidden">
            <a
              href="#"
              className="px-4 transform hover:scale-110 transition duration-300"
            >
              About
            </a>
            <a
              href="#passion"
              className="px-4 transform hover:scale-110 transition duration-300"
            >
              Passions
            </a>
            <a
              href="#portfolio"
              className=" px-4 transform hover:scale-110 transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-500 transform hover:scale-110 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex bg-gray-800 px-4 py-2 text-white cursor-pointer border-solid border-white border-2 rounded-xl transform hover:scale-110 transition duration-300"
            >
              ☰
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <a href="#" className="block px-4 py-2">
                About
              </a>
              <a href="#passion" className="block px-4 py-2">
                Passions
              </a>
              <a href="#portfolio" className="block px-4 py-2">
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 rounded-lg bg-blue-500"
              >
                Contact Me
              </a>
            </div>
          )}
        </nav>

        <header className="flex flex-col md:flex-row items-center mt-16">
          <div className="flex flex-1 flex-col items-center py-10">
            <h3 className=" text-lg w-full max-w-sm md:mb-2 text-left mb-1">
              Hi !
            </h3>
            <h1 className="text-[1.65rem] w-full  font-bold max-w-sm md:mb-6">
              I’m Akkapol Liangchaisiri. <br /> a Full-Stack Developer
            </h1>
            <p className="text-sm w-full  max-w-sm md:mr-6 shadow-2xl bg-slate-200 p-3 rounded-md">
              &nbsp;&nbsp;&nbsp;" Full-Stack developer based in Bangkok,
              Thailand <br /> As a fast learner with a variety of experience, I
              am seeking a challenging position with an organization that
              encourages employee growth and development. I am eager to
              contribute my skills and knowledge to an intellectually and
              technically progressive organization that practices collaborative
              leadership, integrity, and honesty. My goal is to work on
              challenging tasks that will allow me to reach my full potential
              professionally and personally, while also helping the organization
              achieve its objectives.""
            </p>
          </div>
          <div id="passion"></div>
          <div className="flex flex-1 justify-center">
            <img
              src="../src/img/headder1.jpg"
              alt=""
              className="w-[330px] h-[300px] md:w-[410px] md:h-[367px] rounded-full grayscale  "
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default Headder;
