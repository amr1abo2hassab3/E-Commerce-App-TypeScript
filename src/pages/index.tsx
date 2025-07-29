import HeroSection from "../components/home/HeroSection";
import { CategoriesSlider } from "../components/home/SliderCategory";
import SliderHome from "../components/home/SliderHome";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <section>
        <SliderHome />
        <CategoriesSlider />
      </section>
    </div>
  );
};

export default HomePage;
