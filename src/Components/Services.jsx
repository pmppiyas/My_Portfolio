import { serviceData } from "../assets/assets";
import Heading from "./Heading";

export default function Services() {
  return (
    <div className="mb-52">
      <Heading
        sub={"What I offer"}
        main={"My services"}
        para={
          "I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla, and Apple."
        }
      ></Heading>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mt-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {serviceData.map((data, index) => (
          <div
            key={index}
            className="border p-5 bg-gray-100 rounded-2xl shadow-2xl  space-y-4 hover:bg-gray-50 hover:scale-110 transition-all ease-in-out "
          >
            <img src={data.icon}></img>
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            <p className="leading-6">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
