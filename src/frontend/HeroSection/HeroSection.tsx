import banner from "../../assets/harry-potter.webp";
import banner2 from "../../assets/cover.webp";
import FeatureCategories from "../features/FeatureCategories";
import TopCategories from "../top-categories/TopCategories";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto my-4">
      <div className="flex items-center gap-3">
        <div>
          <img
            src={banner}
            alt="Life Book"
            className=" rounded-2xl object-cover h-72 w-screen"
          />
        </div>
        <div>
          <img
            src={banner2}
            alt="Life Book"
            className=" rounded-2xl object-cover h-72 w-screen"
          />
        </div>
      </div>
      <FeatureCategories />
      <TopCategories />
    </div>
  );
};

export default HeroSection;
