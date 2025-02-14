export default function Heading({ sub, main, para }) {
  return (
    <div
      className="flex flex-col justify-center items-center py-10 space-y-2 "
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <h2 className="text-xl opacity-70">{sub}</h2>
      <h5 className="text-4xl font-medium uppercase">{main}</h5>
      <p className="text-center  px-6">{para}</p>
    </div>
  );
}
