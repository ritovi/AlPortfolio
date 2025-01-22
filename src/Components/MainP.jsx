import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import {
  SiC,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
} from "react-icons/si";
import Carousel from "./Carousel";

import arreglo from "../Utils/images.json";

const slides = arreglo;

const Main = () => {
  return (
    <div className="font-fuente ">
      <div className="text-center p-7 py-10 ">
        <h2 className="text-4xl py-2 text-teal-600 font-extrabold">
          Jose Alberto
        </h2>
        <h3 className="text-xl py-2 font-bold">Programmer and Developer</h3>

        <p className="text-md  py-5 leading-8 text-left max-w-[600px] m-auto">
          Computer Science Student providing services for programming and
          develop content needs. Join me down below and let's get cracking!
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-11 text-gray-600">
        <AiFillLinkedin />
        <AiOutlineMail />
        <AiOutlineWhatsApp />
      </div>

      <div className="my-8 flex justify-center">
        <img className="w-60 rounded-full " src="perfil.png" alt="" />
      </div>

      
      <div className="w-72 mt-7 mx-auto bg-white shadow-xl transition-transform duration-300 transform hover:scale-105">
        <div className="text-center px-7">
          <h3 className="text-3xl py-7">Technical Skills</h3>
        </div>

        <hr className=" mx-auto w-72" />

        <div className="flex justify-center pb-3">
          <div className="w-72 text-4xl grid grid-cols-3 gap-y-4 gap-x-0 text-gray-600  py-10 ">
            <div className="flex items-center justify-center animate-bounce">
              <FiCode />
            </div>
            <div className="flex items-center justify-center animate-pulse">
              <SiC />
            </div>
            <div className="flex items-center justify-center animate-spin">
              <SiPython />
            </div>
            <div className="flex items-center justify-center animate-ping">
              <SiJavascript />
            </div>
            <div className="flex items-center justify-center animate-fade-in-down">
              <SiHtml5 />
            </div>
            <div className="flex items-center justify-center animate-fade-in-up">
              <SiCss3 />
            </div>
            <div className="flex items-center justify-center animate-pulse">
              <SiNodedotjs />
            </div>
            <div className="flex items-center justify-center animate-bounce">
              <SiReact />
            </div>
            <div className="flex items-center justify-center animate-shake-x">
              <SiPostgresql />
            </div>
          </div>
        </div>
      </div>

      <div className="w-72 mt-7 mx-auto bg-white shadow-xl transition-transform duration-300 transform hover:scale-105">
        <div className="flex justify-center">
          <div className="w-72 mb-6  pt-6 flex justify-center gap-8">
            <img className="w-14" src="soft.png" alt="design" />
            <div className="pt-3">
              <h3 className="text-3xl">Soft Skills</h3>
            </div>
          </div>
        </div>

        <hr className=" mx-auto w-72" />

        <div className="flex justify-center pb-5">
          <div className="w-72 text-4xl grid grid-cols-2 gap-y-4 gap-x-0 text-gray-600  py-7  ">
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

      <div className="flex justify-center">
        <div className="w-72 my-10 bg-white shadow-xl transition-transform duration-300 transform hover:scale-105 py-7 flex justify-center gap-8">
          <img className="w-11" src="design.png" alt="design" />
          <h3 className="text-3xl">Projects</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center  p-7 w-[350px]">
          <Carousel>
            {slides.map((item, index) => (
              <img key={index} src={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Main;
