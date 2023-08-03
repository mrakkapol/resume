import React from "react";

function Headder() {
  return (
    <>
      <div className="max-w-full mb-40">
        <nav class="bg-gray-800 text-white p-4 flex justify-between mb-20">
          <div class="flex items-center">
            <div class="text-2xl text-gray-400 font-bold">
              Raul<span className="text-gray-600">iqbal</span>
            </div>
          </div>

          <div class="flex items-center">
            <a href="#" class="px-4">
              About
            </a>
            <a href="#" class="px-4">
              Passions
            </a>
            <a href="#" class="px-4">
              Portfolio
            </a>
            <a href="#" class="px-4 py-2 rounded-lg bg-blue-700">
              Contact Me
            </a>
          </div>
        </nav>

        <header className="flex items-center ">
          {/* left div */}

          <div className="flex flex-col flex-1 items-center">
            <h3 className="text-lg max-w-sm mr-[22.5rem] mb-2">Hi !</h3>
            <h1 className="text-3xl font-bold  max-w-sm mb-2 mr-12">
              I’m Muhamad Raul. <br /> a Front-End Developer
            </h1>
            <p className=" text-sm max-w-sm mr-2">
              Front-End devel oper based in Bekasi, Indonesian <br /> I’am
              coding with a clean and beautiful problem solving in mind.
            </p>
          </div>

          {/* right div */}
          <div className="flex flex-1 justify-center">
            <img
              src="../src/img/headder1.png"
              alt=""
              width={501}
              height={467}
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default Headder;
