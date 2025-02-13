import { NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink

export default function Navbar() {
  const [openSideNav, setOpenSideNav] = useState(false);

  const links = (
    <>
      <NavLink to="/" activeClassName="text-blue-500">
        Home
      </NavLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="nav-link"
        activeClass="selected"
        activeStyle={{ color: "red" }}
      >
        About me
      </ScrollLink>
      <NavLink to="/services" activeClassName="text-blue-500">
        Services
      </NavLink>
      <NavLink to="/projects" activeClassName="text-blue-500">
        Projects
      </NavLink>
      <NavLink to="/testimonials" activeClassName="text-blue-500">
        Testimonials
      </NavLink>
    </>
  );

  return (
    <>
      {/* Navbar Background */}
      <div
        className="fixed top-0 right-0 w-full h-16 bg-cover"
        style={{ backgroundImage: `url(${assets.header_bg_color})` }}
      ></div>

      <div className="relative">
        <nav className="flex justify-between items-center py-3 md:py-4 border-2">
          <img src={assets.logo} alt="Company Logo" className="w-28" />

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-xl font-normal bg-amber-50 py-2 px-8 shadow rounded-full">
            {links}
          </ul>

          {/* Resume Button & Mobile Menu */}
          <div>
            <button className="relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-primary border-2 border-primary rounded-full hover:text-white group hover:bg-blue-500">
              <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <FaArrowAltCircleRight />
              </span>
              <span className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">
                My Resume
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setOpenSideNav((prev) => !prev)}
            >
              <img
                src={openSideNav ? assets.arrow_icon : assets.menu_black}
                alt="Toggle Menu"
                className={`w-5 ml-4 ${openSideNav ? "rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {openSideNav && (
          <ul className="flex md:hidden flex-col h-screen bg-green-300 w-52 text-lg items-center gap-6 pt-8 absolute top-20 -right-2">
            {links}
          </ul>
        )}
      </div>
    </>
  );
}
