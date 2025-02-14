import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/assets";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="md:h-[calc(100vh-200px)]  flex flex-col  items-center justify-center space-y-4 text-center "
      data-aos="fade-up"
    >
      {/* Profile Image */}
      <img
        className="w-[200px]"
        src={assets.profile_img}
        alt="Profile"
        data-aos="fade-down"
      />

      {/* Name & Title */}
      <h1 className="text-2xl" data-aos="fade-up">
        Hi, I'm
        <span className="text-2xl"> Prince Mahmud Piyas</span>
      </h1>
      <h2
        className="text-5xl font-semibold"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Frontend Web Developer
      </h2>

      {/* Description */}
      <p className="text-lg" data-aos="fade-up" data-aos-delay="400">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla, and Apple.
      </p>

      {/* Buttons */}
      <div
        className="text-white space-x-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Connect Button */}
        <button className="relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium rounded-full bg-blue-500">
          Connect
        </button>

        {/* My Resume Button */}
        <button className="relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium border-2 border-primary rounded-full text-black group hover:bg-blue-500 hover:text-white transition">
          <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <FaArrowAltCircleRight />
          </span>
          <span className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">
            My Resume
          </span>
        </button>
      </div>
    </div>
  );
}
