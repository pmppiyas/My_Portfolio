import { useState } from "react";
// react icons
import { IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { Link as ScrollLink } from "react-scroll";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="flex items-center justify-between w-full relative ">
      {/* logo */}
      <img
        src="https://i.ibb.co/0BZfPq6/darklogo.png"
        alt="logo"
        className="w-[60px] "
      />

      {/* nav menus */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {links}
      </ul>

      {/* search bar and community links */}
      <div className="flex items-center gap-[10px]">
        <div className="relative md:flex hidden">
          <input
            className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]" />
        </div>

        <FaDiscord className="text-[1.6rem] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
        <TbBrandGithubFilled className="text-[1.6rem] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />

        <CiMenuFries
          className="text-[1.6rem] text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={`${
          isMenuOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}
      >
        <div className="w-full relative mb-5">
          <input
            className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]" />
        </div>

        <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
          {links}
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
