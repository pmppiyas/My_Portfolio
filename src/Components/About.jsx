import Heading from "./Heading";
import "aos/dist/aos.css";
import { assets, infoList } from "../assets/assets";
import { FaNode } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
export default function About() {
  return (
    <div id="about" className="pb-10  ">
      <Heading
        sub={"Introduction"}
        main={"About me"}
        para={
          "I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth."
        }
      ></Heading>
      <div className="flex justify-evenly items-center gap-10 space-y-10  ">
        <div className="col-span-2 space-y-6 flex flex-col  gap-5 md:gap-8 h-full justify-between ">
          <div className="flex gap-6 flex-col md:flex-row ">
            {infoList.map((info) => {
              return (
                <div
                  key={info.id}
                  className="h-[200px]  p-6 md:p-2  "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="w-full shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:right-0 hover:before:right-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#c0e6ed] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:right-0 hover:after:right-[-20px] after:rounded-md after:bg-[#d4f2f7] after:z-[-2] after:transition-all after:duration-500">
                    {/*  image  */}
                    <div className=" bg-gray-100 p-4">
                      <img
                        src={info.icon}
                        alt="animated_card"
                        className="  rounded-t-md object-cover "
                      />
                    </div>
                    {/*  contents  */}
                    <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
                      <h3 className="text-[1.5rem] font-bold text-gray-600">
                        {info.title}
                      </h3>
                      <p className="text-[1rem] font-[400] text-gray-600">
                        The science of today is the technology of tomorrow –
                        Edward Teller
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="px-6 md:px-4 py-2"
            data-AOS="fade-up"
            data-aos-delay="500"
          >
            <p className="text-xl font-semibold ">Tool i use</p>
            <div className="flex gap-6 flex-wrap  ">
              <VscVscode size={60} color="gray" />
              <SiNextdotjs size={60} color="gray" />
              <SiMongodb size={60} color="gray" />
              <SiExpress size={60} color="gray" />
              <IoLogoReact size={60} color="gray" />
              <FaNode size={60} color="gray" />
              <TbBrandThreejs size={60} color="gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
