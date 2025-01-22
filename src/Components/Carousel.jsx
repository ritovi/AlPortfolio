import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Carousel = (props) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr === 0 ? props.children.length - 1 : curr - 1);
  };

  const next =()=>{
    setCurr(curr===props.children.length-1?0: curr+1 )
  }

  return (
    <div className=" relative overflow-hidden">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr*100}%)` }}>
        {props.children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BiChevronLeft size={20} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <BiChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-3 right-0 left-0">
          <div className="flex justify-center items-center gap-2">
            {
              props.children.map((_,index)=>(
                <div key={index} className={` w-2 h-2  bg-white rounded-full ${index===curr?"p-2":"bg-opacity-50"}`}/>
              ))
            }
          </div>
      </div>

    </div>
  );
};

export default Carousel;
