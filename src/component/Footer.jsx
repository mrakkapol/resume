import React from "react";

function Footer() {
  return (
    <>
      <footer id="contact" className="relative max-w-[1450px] py-20">
        <h1
          className="flex items-center justify-center mb-10 text-center
           text-[35px] font-normal text-color-[#14279B] tracking-[1.925px]"
        >
          Contact&nbsp;
          <span className="text-color-[#002265] font-size-[35px] font-semibold tracking-[1.925px]">
            Me
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div
            className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 
          transform hover:scale-110 transition duration-300"
          >
            <a href="https://github.com/mrakkapol">
              <img className="mb-3 mx-4 " src="../src/img/f-1.png" alt="" />
            </a>
            <p className="mb-2 text-black text-center text-[1.75rem] font-semibold tracking-wider">
              Github
            </p>
          </div>

          <div
            className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 
          transform hover:scale-110 transition duration-300"
          >
            <a href="mailto:mr.akkapol@gmail.com">
              <img className="mb-3 mx-4 " src="../src/img/f-3.png" alt="" />
            </a>
            <p className="mb-2 text-black text-center text-[1.75rem] font-semibold tracking-wider">
              E-Mail
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[347px] max-h-[280px] p-8 
          transform hover:scale-110 transition duration-300"
          >
            <a href="tel:+66661122787">
              <img className="mb-3 mx-4 " src="../src/img/f-4.png" alt="" />
            </a>
            <p className="mb-2 text-black text-center text-[1.75rem] font-semibold tracking-wider">
              Telephone
            </p>
          </div>
        </div>

        <div>
          <img
            className=" absolute grayscale bottom-[-3rem] sm:bottom-[-7rem] md:bottom-[-12rem]"
            src="../src/img/f-5.png"
            alt=""
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
