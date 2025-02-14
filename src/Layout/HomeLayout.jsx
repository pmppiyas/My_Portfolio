import About from "../Components/About";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import MyWork from "../Components/MyWork";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";

export default function HomeLayout() {
  return (
    <div className="container  mx-auto px-2 border-2 space-y-24">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Footer></Footer>
    </div>
  );
}
