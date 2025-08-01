import { HeaderWorled } from "../components/HeaderWorld";
import HeroSection from "../components/home/HeroSection";
import { NewCollection } from "../components/home/NewCollection";
import { CategoriesSlider } from "../components/home/SliderCategory";
import SliderHome from "../components/home/SliderHome";
import useGetDataQuery from "../hooks/useGetDataQuery";
import type { RespnseCategory } from "../interfaces/categorysInterfaces";

const HomePage = () => {
  // handler
  const { data } = useGetDataQuery<RespnseCategory>({
    queryKey: ["getAllCategories"],
    url: "/api/v1/categories",
  });

  const categories = data?.data;
  // render
  const renderNewCollection = categories?.map((cat) => (
    <NewCollection
      key={cat._id}
      id={cat._id}
      category={cat.name}
      queryKey={[`${cat.name}`, cat._id]}
    />
  ));
  return (
    <div className="container mx-auto">
      <HeroSection />
      <section>
        <SliderHome />
        <CategoriesSlider />
      </section>
      <HeaderWorled />
      {renderNewCollection}
    </div>
  );
};

export default HomePage;
