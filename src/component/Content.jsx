import React from "react";
import c1 from "../img/c-1.svg";
import c2 from "../img/c-2.png";
import c3 from "../img/c-3.png";
import cb1 from "../img/cb-1.png";
import cb2 from "../img/cb-2.png";
import cb3 from "../img/cb-3.png";

function Content() {
  return (
    <>
      {/* Passion */}
      <article className="py-20 max-w-[1450px] bg-slate-200">
        <h1
          className="flex items-center justify-center mb-10 text-center
           text-[35px] font-normal text-color-[#14279B] tracking-[1.925px]"
        >
          Additional&nbsp;
          <span className="text-color-[#002265] font-size-[35px] font-semibold tracking-[1.925px]">
            Passion
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div
            className="flex flex-col mb-10 md:mb-0 items-center max-w-[347px] max-h-[280px] p-8 shadow-2xl rounded-2xl
          transform hover:scale-110 transition duration-300"
          >
            <img className="mb-3 mx-4" src={c1} alt="" />
            <p className="mb-2 text-black text-center text-25 font-semibold tracking-wider">
              Front-End&nbsp;
              <span className="text-black text-25 font-normal tracking-wider">
                Developer
              </span>
            </p>
            <p className="text-black text-25 font-normal tracking-wider">
              (React, Bootstrap, Tailwind)
            </p>
          </div>
          <div
            className="flex flex-col mb-10 md:mb-0 items-center max-w-[347px] max-h-[280px] p-8 shadow-2xl rounded-2xl
          transform hover:scale-110 transition duration-300"
          >
            <img className="mb-3 mx-4" src={c2} alt="" />
            <p className="mb-2 text-black text-center text-25 font-semibold tracking-wider">
              Back-End&nbsp;
              <span className="text-black text-25 font-normal tracking-wider">
                Developer
              </span>
            </p>
            <p className="text-black text-25 font-normal tracking-wider">
              (NodeJS, MongoDB, NoSQL)
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 shadow-2xl rounded-2xl
          transform hover:scale-110 transition duration-300"
          >
            <img className="mb-3 mx-4" src={c3} alt="" />
            <p className="mb-2 text-black text-center text-25 font-semibold tracking-wider">
              UI/UX &nbsp;
              <span className="text-black text-25 font-normal tracking-wider">
                Designer
              </span>
            </p>
            <p
              id="portfolio"
              className="text-black text-25 font-normal tracking-wider"
            >
              (Figma)
            </p>
          </div>
        </div>
      </article>

      {/* My Portfolio */}

      <article className="py-20 max-w-[1450px] bg-slate-400">
        <h1
          className="flex items-center justify-center mb-10 text-center
           text-[35px]  text-color-[#14279B] font-[400] tracking-[1.925px]"
        >
          My&nbsp;
          <span className="text-color-[#002265] font-size-[35px] font-[600] tracking-[1.925px]">
            Portfolio
          </span>
        </h1>
        <div className="flex flex-col  md:flex-row items-center justify-evenly ">
          <div
            className="bg-white relative mb-10 md:mb-0 flex z-10 flex-col min-w-[347px] min-h-[250px] p-8 shadow-2xl rounded-2xl border-solid border-2
          transform hover:scale-110 transition duration-300"
          >
            <p className="z-10 py-4 font-[600] absolute top-2 font-[Montserrat]">
              Sendpay
            </p>
            <div className="w-[200px] h-[200px] bg-[#6C63FF;] opacity-50 rounded-full absolute top-3 left-3 z-0"></div>
            <img
              className="w-289 h-164 object-cover z-10 absolute bottom-1 right-1"
              src={cb1}
              alt="Card Image"
            />
          </div>
          <div
            className="bg-white relative mb-10 md:mb-0 flex z-10 flex-col min-w-[347px] min-h-[250px] p-8 shadow-2xl rounded-2xl border-solid border-2
          transform hover:scale-110 transition duration-300"
          >
            <p className="z-10 py-4 font-[600] absolute top-2 font-[Montserrat] ">
              E- Commerce
            </p>
            <div className="w-[200px] h-[200px] bg-[#4DC2F1] opacity-50 rounded-full absolute top-3 left-3 z-0"></div>
            <img
              className="w-289 h-164 object-cover z-10 absolute bottom-1 right-1"
              src={cb2}
              alt="Card Image"
            />
          </div>
          <div
            className="bg-white relative flex z-10 flex-col min-w-[347px] min-h-[250px] p-8 shadow-2xl rounded-2xl border-solid border-2
          transform hover:scale-110 transition duration-300"
          >
            <p className="z-10 py-4 font-[600] absolute top-2 font-[Montserrat]">
              BestsLearning
            </p>
            <div className="w-[200px] h-[200px] bg-[#5F596E] opacity-50 rounded-full absolute top-3 left-3 z-0"></div>
            <img
              className="w-[289px] h-[164px] object-cover z-10 absolute bottom-1 right-1"
              src={cb3}
              alt="Card Image"
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Content;
