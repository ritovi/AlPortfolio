import Carousel from "./Carousel";

import arreglo from "../Utils/images.json";
import { useState } from "react";

const slides = arreglo;

const Home = () => {
  const [mood, setMood] = useState(false)
  return (
    <div className={`${mood ? "bg-black/90" : "bg-white"}`}>
      <header className="px-5 font-fuente font-b  xl:mx-3">
        <nav className="pt-10 mb-12 flex justify-between">
          <h1 className={`font-semibold  mt-1 text-lg ${mood ? "text-gray-400" : "text-black"} `}>DEVELOPEDBYAL</h1>
          <ul className="flex items-center">
            <li onClick={() => setMood(!mood)}>
              <img src="moon.svg" alt="Moon" className="cursor-pointer w-10" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-lg px-4 py-2 rounded-md ml-5 te "
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

      </header>
      <div className="font-fuente ">
        <div className="text-center p-7 py-10 ">
          <h2 className="text-4xl xl:text-5xl py-2 text-teal-600 font-extrabold">
            Jose Alberto
          </h2>
          <h3 className={`text-xl xl:text-2xl py-2 font-bold ${mood ? "text-gray-400" : "text-black"}`}>Programmer and Developer</h3>

          <p className={`text-lg xl:text-xl py-7 leading-8 text-left  sm:w-3/4 md:w-3/4 xl:w-3/5 2xl:w-full 2xl:text-center lg:w-3/4 m-auto ${mood ? "text-gray-400" : "text-black"}`}>
            Computer Science Student providing services for programming and
            develop content needs. Join me down below and let's get cracking!
          </p>
        </div>
        <div className="text-4xl flex justify-center gap-11 text-gray-600">
          <img src="linkedin.svg" alt="Linkedin" />
          <img src="gmail.svg" alt="Gmail" />
          <img src="whatsapp.svg" alt="WhatsApp" />
        </div>

        <div className="my-8 flex justify-center">
          <img className="w-60 rounded-full " src="perfil.png" alt="" />
        </div>

        <div className="flex flex-wrap  my-3 ">
          <div className={`w-3/4  md:w-3/5 lg:w-2/5 2xl:w-1/4 mt-7 mx-auto shadow-xl transition-transform duration-300 transform hover:scale-105 ${mood ? "bg-black/10" : "bg-white"}`}>
            <div className="text-center px-7">
              <h3 className={`text-3xl py-7 ${mood ? "text-gray-400 font-semibold" : "text-black"}`}>Technical Skills</h3>
            </div>

            <hr className={` mx-auto w-full ${mood ? "border-1 border-gray-500" : "border-1 border-gray-200"}`} />


            <div className="flex justify-center pb-3  ">
              <div className="w-4/5 text-4xl grid grid-cols-3 gap-y-7 gap-x-20 text-gray-600  py-10 ">
                <div className="flex items-center justify-center animate-bounce">
                  <img src="linux.svg" alt="Linux" />
                </div>

                <div className="flex items-center justify-center animate-spin">
                  <img src="python.svg" alt="Python" />
                </div>
                <div className="flex items-center justify-center animate-ping">
                  <img src="javascript.svg" alt="JS" />
                </div>
                <div className="flex items-center justify-center animate-shake-x">
                  <img src="mariadb.svg" alt="MariaDB" />
                </div>
                <div className="flex items-center justify-center animate-fade-in-down">
                  <img src="html.svg" alt="HTML" />
                </div>
                <div className="flex items-center justify-center animate-fade-in-up">
                  <img src="css.svg" alt="CSS" />
                </div>
                <div className="flex items-center justify-center animate-pulse">
                  <img src="nodejs.svg" alt="nodeJS" />
                </div>
                <div className="flex items-center justify-center animate-bounce">
                  <img src="react.svg" alt="React" />
                </div>
                <div className="flex items-center justify-center animate-shake-x">
                  <img src="cPlusPlus.svg" alt="c++" />
                </div>
                <div className="flex items-center justify-center animate-shake-x">
                  <img src="postgresql.svg" alt="PostgreSql" />
                </div>

                <div className="flex items-center justify-center animate-shake-x">
                  <img src="arch.svg" alt="ArchLinux" />
                </div>
                <div className="flex items-center justify-center animate-pulse">
                  <img src="c-original.svg" alt="C" />
                </div>
              </div>
            </div>
          </div>

          {/* _________________________________________________________________________________ */}

          <div className={`w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/4 mt-7 mx-auto  shadow-xl transition-transform duration-300 transform hover:scale-105 ${mood ? "bg-black/10" : "bg-white"}`}>
            <div className="flex justify-center ">
              <div className="mb-6  pt-6 flex justify-center gap-8">
                <img className="w-14" src="soft.png" alt="design" />
                <div className="pt-3">
                  <h3 className={`text-3xl ${mood ? "text-gray-400 font-semibold" : "text-black"}`}>Soft Skills</h3>
                </div>
              </div>
            </div>

            <hr className={` mx-auto w-full ${mood ? "border-1 border-gray-500" : "border-1 border-gray-200"}`} />

            <div className="flex justify-center  pb-5 ">
              <div className="w-4/5 text-4xl grid grid-cols-2 gap-y-7 gap-x-7 text-gray-600  py-7  ">
                <div className="flex flex-col items-center justify-center animate-pulse">
                  <img src="teamwork.png" alt="TeamWork" />
                  <p className="text-xs">TeamWork</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <img className="w-14" src="change.gif" alt="" />
                  <p className=" pt-3 text-xs">Adaptability</p>
                </div>
                <div className="flex flex-col items-center justify-center animate-bounce">
                  <img src="solving.png" alt="SolvingProblem" />
                  <p className="text-xs">Solving</p>
                </div>
                <div className="flex flex-col items-center justify-center animate-pulse">
                  <img src="effective.png" alt="" />
                  <p className="text-xs">Comunication</p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------- */}







        </div>
        <div className=" flex flex-wrap my-3">
          <div className={` w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/3 my-7 mx-auto  shadow-xl transition-transform duration-300 transform hover:scale-105 ${mood ? "bg-black/10" : "bg-white"}`}>
            <div className="flex justify-center ">
              <div className="w-4/5 mt-5  py-7 flex justify-center gap-8 ">
                <img className="w-11" src="design.png" alt="design" />
                <h3 className={`text-3xl  ${mood ? "text-gray-400 font-semibold" : "text-black"}`}>Small Projects</h3>
              </div>
            </div>

            <hr className={` mx-auto w-full ${mood ? "border-1 border-gray-500" : "border-1 border-gray-200"}`} />


            <div className="flex justify-center ">
              <div className="flex justify-center py-7 w-3/5  max-w-lg">
                <Carousel>
                  {slides.map((item, index) => (
                    <img key={index} src={item} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className={`w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/3 my-7 mx-auto  shadow-xl transition-transform duration-300 transform hover:scale-105 ${mood ? "bg-black/10" : "bg-white"}`}>
            <div className="flex justify-center ">
              <div className="w-4/5 mt-5  py-7 flex justify-center gap-8 ">
                <img className="w-11" src="design.png" alt="design" />
                <h3 className={`text-3xl  ${mood ? "text-gray-400 font-semibold" : "text-black"}`}>Large Projects</h3>
              </div>
            </div>

            <hr className={` mx-auto w-full ${mood ? "border-1 border-gray-500" : "border-1 border-gray-200"}`} />


            <div className="flex justify-center ">
              <div className="flex justify-center py-7 w-3/5   max-w-lg">
                <Carousel>
                  {slides.map((item, index) => (
                    <img key={index} src={item} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
