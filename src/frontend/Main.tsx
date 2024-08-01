import Footer from "./footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import FrontNavbar from "./Navbar/FrontNavbar";
import Header from "./Navbar/Header";

const Main = () => {
  return (
    <div className="bg-green-50">
      <Header />
      <FrontNavbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Main;
