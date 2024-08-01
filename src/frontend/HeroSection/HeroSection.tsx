import banner from "../../assets/Book-Banner.jpg";
import FeatureCategories from "../features/FeatureCategories";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto my-2">
      <div className="">
        <img
          src={banner}
          alt="Life Book"
          className=" rounded-2xl h-96 w-screen"
        />
      </div>
      <FeatureCategories />
    </div>
  );
};

export default HeroSection;
