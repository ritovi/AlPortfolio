import { BsFillMoonStarsFill } from "react-icons/bs";


const Uno = () => {
  return (
    <div>
      <header className="px-5 font-fuente">
        <nav className="pt-10 mb-12 flex justify-between">
          <h1 className="font-semibold   mt-1">DEVELOPEDBYAL</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer " />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded-md ml-5 te "
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
       
      </header>
    </div>
  );
};

export default Uno;
