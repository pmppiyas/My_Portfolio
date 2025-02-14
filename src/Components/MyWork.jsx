import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { workData } from "../assets/assets";
import Heading from "./Heading";
import { FaEye } from "react-icons/fa";

export default function MyWork() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pb-16">
      <Heading
        sub={"My portfolio"}
        main={"My latest work"}
        para={
          "Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development."
        }
      ></Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-6">
        {workData.map((data, index) => (
          <div
            key={index}
            className=" relative overflow-hidden group cursor-pointer rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
          >
            {/* Image */}
            <img
              src={data.bgImage}
              alt="animated_card"
              className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
            />

            {/* Text */}
            <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
              <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">
                {data.title}
              </h1>
              <p className="text-center z-[-1] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
                {data.description}
              </p>
              <button className="bg-gray-400 z-[-1] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem] flex items-center gap-2">
                <FaEye />
                View Details
              </button>
            </div>

            {/* Bottom Shadow */}
            <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgba(0,0,0,0.001)] to-[rgba(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
