import React from "react";

function Content() {
  return (
    <>
      {/* Passion */}
      <article className="mb-40">
        <h1
          className="flex items-center justify-center mb-10 text-center
           text-[35px] font-normal text-color-[#14279B] tracking-[1.925px]"
        >
          Additional
          <span className="text-color-[#002265] font-size-[35px] font-semibold tracking-[1.925px]">
            Passion
          </span>
        </h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 shadow-2xl rounded-2xl">
            <img className="mb-3 mx-4" src="../src/img/c-1.svg" alt="" />
            <p className="mb-2 text-black text-center text-25 font-semibold tracking-wider">
              Front-End&nbsp;
              <span className="text-black text-25 font-normal tracking-wider">
                Developer
              </span>
            </p>
            <p className="text-black text-25 font-normal tracking-wider">
              (Sass, Bootstrap, Tailwind)
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 shadow-2xl rounded-2xl">
            <img className="mb-3 mx-4" src="../src/img/c-2.png" alt="" />
            <p className="mb-2 text-black text-center text-25 font-semibold tracking-wider">
              Back-End&nbsp;
              <span className="text-black text-25 font-normal tracking-wider">
                Developer
              </span>
            </p>
            <p className="text-black text-25 font-normal tracking-wider">
              (NodeJS, Laravel, Codeigniter)
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 shadow-2xl rounded-2xl">
            <img className="mb-3 mx-4" src="../src/img/c-3.png" alt="" />
            <p className="mb-2 text-black text-center text-25 font-semibold tracking-wider">
              UI/UX &nbsp;
              <span className="text-black text-25 font-normal tracking-wider">
                Designer
              </span>
            </p>
            <p className="text-black text-25 font-normal tracking-wider">
              (Figma, Zeplin, Adobe XD)
            </p>
          </div>
        </div>
      </article>

      {/* My Portfolio */}

      <article className="mb-40">
        <h1
          className="flex items-center justify-center mb-10 text-center
           text-[35px]  text-color-[#14279B] font-[400] tracking-[1.925px]"
        >
          My
          <span className="text-color-[#002265] font-size-[35px] font-[600] tracking-[1.925px]">
            Portfolio
          </span>
        </h1>
        <div className="flex justify-evenly">
          <div className=" relative flex z-10 flex-col min-w-[347px] min-h-[280px] p-8 shadow-2xl rounded-2xl border-solid border-2">
            <p className="z-10 py-4 font-[600] absolute top-2 font-[Montserrat]">
              Sendpay
            </p>
            <div className="w-[200px] h-[200px] bg-[#6C63FF;] opacity-50 rounded-full absolute top-3 left-3 z-0"></div>
            <img
              className="w-289 h-164 object-cover z-10 absolute bottom-1 right-1"
              src="../src/img/cb-1.png"
              alt="Card Image"
            />
          </div>
          <div className=" relative flex z-10 flex-col min-w-[347px] min-h-[280px] p-8 shadow-2xl rounded-2xl border-solid border-2">
            <p className="z-10 py-4 font-[600] absolute top-2 font-[Montserrat] ">
              E- Commerce
            </p>
            <div className="w-[200px] h-[200px] bg-[#4DC2F1] opacity-50 rounded-full absolute top-3 left-3 z-0"></div>
            <img
              className="w-289 h-164 object-cover z-10 absolute bottom-1 right-1"
              src="../src/img/cb-2.png"
              alt="Card Image"
            />
          </div>
          <div className=" relative flex z-10 flex-col min-w-[347px] min-h-[280px] p-8 shadow-2xl rounded-2xl border-solid border-2">
            <p className="z-10 py-4 font-[600] absolute top-2 font-[Montserrat]">
              BestsLearning
            </p>
            <div className="w-[200px] h-[200px] bg-[#5F596E] opacity-50 rounded-full absolute top-3 left-3 z-0"></div>
            <img
              className="w-[289px] h-[164px] object-cover z-10 absolute bottom-1 right-1"
              src="../src/img/cb-3.png"
              alt="Card Image"
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Content;
