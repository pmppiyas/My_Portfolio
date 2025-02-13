import About from "../Components/About";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

export default function HomeLayout() {
  return (
    <div className="container  mx-auto px-2 border-2 space-y-6">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
    </div>
  );
}
