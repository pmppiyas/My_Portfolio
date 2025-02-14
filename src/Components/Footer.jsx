import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineMail,
} from "react-icons/md";

export default function Footer() {
  const links = (
    <>
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="nav-link text-gray-600 hover:text-blue-500 cursor-pointer transition-all duration-300"
        activeClass="selected"
        activeStyle={{ color: "red" }}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="nav-link text-gray-600 hover:text-blue-500 cursor-pointer transition-all duration-300"
        activeClass="selected"
        activeStyle={{ color: "red" }}
      >
        About me
      </ScrollLink>
      <ScrollLink
        to="services"
        smooth={true}
        duration={500}
        className="nav-link text-gray-600 hover:text-blue-500 cursor-pointer transition-all duration-300"
        activeClass="selected"
        activeStyle={{ color: "red" }}
      >
        Services
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="nav-link text-gray-600 hover:text-blue-500 cursor-pointer transition-all duration-300"
        activeClass="selected"
        activeStyle={{ color: "red" }}
      >
        My Projects
      </ScrollLink>
      <ScrollLink
        to="testimonial"
        smooth={true}
        duration={500}
        className="nav-link text-gray-600 hover:text-blue-500 cursor-pointer transition-all duration-300"
        activeClass="selected"
        activeStyle={{ color: "red" }}
      >
        Testimonial
      </ScrollLink>
    </>
  );
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-100 boxShadow rounded-xl w-full p-8 md:p-12 mt-8">
      <div className="flex flex-col items-center justify-center space-y-8 md:space-y-0 md:flex-row md:justify-between gap-6">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Quick Links</h2>
          <div className="flex flex-wrap justify-center sm:justify-between gap-6 w-full">
            {links}
          </div>
          <div className="relative mt-12 mb-6 w-full">
            <input
              className="py-3 pr-4 pl-12 w-full outline-none bg-gray-100 rounded-lg"
              placeholder="Email Address"
            />
            <MdOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#6C777C] text-[1.5rem]" />
            <button className="absolute top-0 right-0 mt-2 mr-2 bg-[#825FF1] hover:bg-[#7755e8] text-white py-2 px-6 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Follow Us</h2>
          <div className="flex md:flex-col lg:flex-row space-x-4">
            <a
              className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
              href="#"
            >
              <CgGames />
            </a>
            <a
              className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
              href="#"
            >
              <BsTwitter />
            </a>
            <a
              className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
              href="#"
            >
              <BsFacebook />
            </a>
            <a
              className="text-2xl p-2 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
              href="#"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 md:items-start">
          <h2 className="text-xl font-semibold text-gray-700">Contact Us</h2>
          <div className="space-y-2">
            <a
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-all duration-300"
              href="tel:+8801305282768"
            >
              <MdOutlineLocalPhone className="text-2xl" />
              <span>+8801777233703</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-all duration-300"
              href="mailto:princemahmudpiyas@gmail.com"
            >
              <MdOutlineEmail className="text-2xl" />
              <span>princemahmudpiyas@gmail.com</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-all duration-300"
              href="#"
            >
              <IoLocationOutline className="text-2xl" />
              <span>Gaibandha, Rangpur Division, Bangladesh</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 flex items-center justify-center">
        <p className="text-sm text-gray-600">
          © 2025 Prince Mahmud Piyas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
